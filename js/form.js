/*
  GET LISTED FORM
  ===============
  The form itself is plain HTML in index.html, so it always renders even when
  a third-party service is unreachable — which is why the old Jotform embed
  had to go. This file handles validation and sending only.

  Submissions POST to a Google Form. Google is reachable from Vietnamese
  ISPs, and responses land in a Google Sheet you can sort, filter and
  eventually use to build listings from.

  ---------------------------------------------------------------------------
  HOW TO CONNECT IT (see README for the walkthrough)
  ---------------------------------------------------------------------------
  1. Build a Google Form with one question per field in FIELD_IDS below,
     in that order. Make every question "Short answer" except Anything Else,
     which is "Paragraph".

     Use Short answer even for the three dropdowns. Google rejects a response
     whose multiple-choice value doesn't exactly match an option, so a single
     renamed category would start silently losing submissions. The dropdown on
     our own page already constrains what people can pick.

  2. Click "Send" → link icon → copy the form URL, or open the form and copy
     the address bar. Put its /formResponse form of the URL in ACTION below:
        https://docs.google.com/forms/d/e/FORM_ID/formResponse

  3. Get the field ids: in the form editor, ⋮ menu → "Get pre-filled link",
     type the field's own name into each box (type "business_name" into the
     business name box, and so on), then Get link → Copy link. The copied URL
     contains entry.123456=business_name pairs. Map each number below.
*/

(function () {
  // ---- CONFIGURE ME --------------------------------------------------
  // Ends in /formResponse, not /viewform.
  const ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSfCDhpZkp1le0PHZkjOpvFoANM5ZLR0HSJ7bx6-aijW8cKaTw/formResponse";

  // Our field name  ->  the Google Form's entry id.
  // Taken from the form's pre-filled link. If you add or reorder questions in
  // Google Forms, generate a fresh pre-filled link and update these.
  const FIELD_IDS = {
    business_name: "entry.1762006098",
    category: "entry.730783359",
    description: "entry.82509938",
    address: "entry.1696274899",
    phone: "entry.1799622903",
    email: "entry.185629187",
    website: "entry.1803095581",
    english_level: "entry.1675126654",
    listing_type: "entry.1388407470",
    notes: "entry.1537706449",
  };

  const FALLBACK_EMAIL = "martynsessford@gmail.com";
  // --------------------------------------------------------------------

  const form = document.getElementById("listingForm");
  if (!form) return;

  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("formSubmit");
  const categorySelect = document.getElementById("f-category");
  const descInput = document.getElementById("f-description");
  const descCount = document.getElementById("descCount");

  const isConnected = Boolean(ACTION && FIELD_IDS.business_name);

  // Build the category list from the same data the directory renders, so a
  // new category never has to be added in two places.
  if (categorySelect) {
    categorySelect.appendChild(new Option("Choose…", ""));
    if (typeof CATEGORIES !== "undefined") {
      CATEGORIES.forEach((c) => {
        categorySelect.appendChild(new Option(`${c.icon} ${c.label}`, c.label));
      });
    }
    categorySelect.appendChild(new Option("Other — tell us below", "Other"));
  }

  if (descInput && descCount) {
    const updateCount = () => {
      const left = 90 - descInput.value.length;
      descCount.textContent = left;
      descCount.style.color = left < 10 ? "var(--red)" : "";
    };
    descInput.addEventListener("input", updateCount);
    updateCount();
  }

  function setStatus(message, kind) {
    statusEl.textContent = message;
    statusEl.className = "form-status" + (kind ? " is-" + kind : "");
  }

  // Carry everything the visitor typed into a pre-filled email, so a failed
  // send never means retyping the lot.
  function mailtoFallback(data) {
    const body = Object.entries(data)
      .filter(([k, v]) => v && k !== "_gotcha")
      .map(([k, v]) => `${k.replace(/_/g, " ")}: ${v}`)
      .join("\n");
    return (
      `mailto:${FALLBACK_EMAIL}` +
      `?subject=${encodeURIComponent("Listing: " + (data.business_name || "new business"))}` +
      `&body=${encodeURIComponent(body)}`
    );
  }

  function showFallback(data, reason) {
    setStatus(reason + " ", "error");
    const link = document.createElement("a");
    link.href = mailtoFallback(data);
    link.className = "form-direct";
    link.textContent = "Send it by email instead →";
    statusEl.appendChild(link);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      const bad = form.querySelector(":invalid:not([type='hidden'])");
      setStatus("Please fill in the highlighted fields.", "error");
      form.classList.add("show-errors");
      if (bad) {
        bad.focus();
        bad.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: accept and discard silently, so bots get no signal.
    if (data._gotcha) {
      setStatus("Thanks — we'll be in touch.", "ok");
      form.reset();
      return;
    }

    if (!isConnected) {
      showFallback(data, "The online form isn't connected yet.");
      return;
    }

    submitBtn.disabled = true;
    setStatus("Sending…", "");

    // Translate our field names into Google's entry ids.
    const payload = new URLSearchParams();
    Object.entries(FIELD_IDS).forEach(([name, entryId]) => {
      if (entryId && data[name]) payload.append(entryId, data[name]);
    });

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      // Google doesn't send CORS headers on formResponse, so the reply is
      // unreadable and we must use no-cors. That is fine for telling apart
      // the two cases that matter: if the network is blocked the request
      // rejects outright, and if it goes through it resolves opaque. We
      // cannot see Google's status code, but a delivered POST is recorded.
      await fetch(ACTION, {
        method: "POST",
        mode: "no-cors",
        body: payload,
        signal: controller.signal,
      });
      clearTimeout(timeout);

      form.reset();
      form.classList.remove("show-errors");
      if (descCount) descCount.textContent = "90";
      setStatus(
        "Thanks — your listing is in. We review each one by hand and you'll hear from us within a few days.",
        "ok"
      );
    } catch (err) {
      showFallback(data, "Couldn't reach the form service from your connection.");
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
