/*
  GET LISTED FORM
  ===============
  The form itself is plain HTML in index.html, so it always renders even if
  every third-party service in the world is unreachable. This file only
  handles validation and sending.

  ---------------------------------------------------------------------------
  SET YOUR SUBMIT ENDPOINT BELOW
  ---------------------------------------------------------------------------
  Jotform was unreachable from Vietnamese ISPs, so pick a service you have
  confirmed loads from Hanoi. Test a candidate by opening its site in your
  browser first — if the site won't load, its form endpoint won't either.

  Options, in the order worth trying:

    1. Google Forms  — Google is reliably reachable in Vietnam. Create a form,
       then Send → <> embed, and read the /formResponse URL out of it. Needs
       the entry.NNN field ids, so see USE_GOOGLE_FORM below.
    2. Formspree     — formspree.io, free tier covers ~50 submissions/month.
       Endpoint looks like https://formspree.io/f/xxxxxxxx
    3. Web3Forms     — web3forms.com, free, uses an access_key field.

  Until an endpoint is set, the form falls back to opening the visitor's email
  client with everything pre-filled. That always works, but it loses people —
  set a real endpoint as soon as you have confirmed one works.
*/

(function () {
  // ---- CONFIGURE ME --------------------------------------------------
  const ENDPOINT = ""; // e.g. "https://formspree.io/f/abcdwxyz"
  const FALLBACK_EMAIL = "martynsessford@gmail.com";
  // --------------------------------------------------------------------

  const form = document.getElementById("listingForm");
  if (!form) return;

  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("formSubmit");
  const categorySelect = document.getElementById("f-category");
  const descInput = document.getElementById("f-description");
  const descCount = document.getElementById("descCount");

  // Build the category list from the same data the directory renders, so a
  // new category never has to be added in two places.
  if (categorySelect) {
    const placeholder = new Option("Choose…", "");
    categorySelect.appendChild(placeholder);
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

  function firstInvalidField() {
    return form.querySelector(":invalid:not([type='hidden'])");
  }

  // Compose a mailto: with everything the visitor typed, so a failed send
  // never means they have to type it all again.
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
    const link = document.createElement("a");
    link.href = mailtoFallback(data);
    link.className = "form-direct";
    link.textContent = "Send it by email instead →";

    setStatus(reason + " ", "error");
    statusEl.appendChild(link);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      const bad = firstInvalidField();
      setStatus("Please fill in the highlighted fields.", "error");
      if (bad) {
        bad.focus();
        bad.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      form.classList.add("show-errors");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: silently accept and discard, so bots get no signal.
    if (data._gotcha) {
      setStatus("Thanks — we'll be in touch.", "ok");
      form.reset();
      return;
    }

    if (!ENDPOINT) {
      showFallback(data, "The online form isn't connected yet.");
      return;
    }

    submitBtn.disabled = true;
    setStatus("Sending…", "");

    try {
      // Ten seconds, so a blocked endpoint fails fast into the fallback
      // rather than leaving someone staring at "Sending…".
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) throw new Error("HTTP " + res.status);

      form.reset();
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
