/* ════════════════════════════════════════════
   CONTACT PAGE JAVASCRIPT
   js/contact.js
════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
  /* Wire up submit button */
  var submitBtn = document.getElementById("btnSubmit");
  if (submitBtn) {
    submitBtn.addEventListener("click", submitToWhatsApp);
  }
});

function submitToWhatsApp() {
  var name = (document.getElementById("f_name") || {}).value || "";
  var phone = (document.getElementById("f_phone") || {}).value || "";
  var cls = (document.getElementById("f_class") || {}).value || "";
  var course = (document.getElementById("f_course") || {}).value || "";
  var parent = (document.getElementById("f_parent") || {}).value || "";
  var batch = (document.getElementById("f_batch") || {}).value || "";
  var msg = (document.getElementById("f_msg") || {}).value || "";

  name = name.trim();
  phone = phone.trim();
  parent = parent.trim();
  msg = msg.trim();

  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }

  var text =
    "NEW ENROLLMENT — ABC INSTITUTE\n\n" +
    "Student Name: " +
    name +
    "\n" +
    "Phone: " +
    phone +
    "\n" +
    "Current Class: " +
    (cls || "Not specified") +
    "\n" +
    "Course: " +
    (course || "Not specified") +
    "\n" +
    "Parent/Guardian: " +
    (parent || "Not provided") +
    "\n" +
    "Preferred Batch: " +
    (batch || "Not specified") +
    "\n" +
    "Message: " +
    (msg || "None") +
    "\n\n" +
    "ABC Institute, 161/25 Jogabai,\n" +
    "Jamia Nagar, New Delhi - 110025\n\n" +
    "Sent via Website Enrollment Form.";

  var successEl = document.getElementById("successMsg");
  if (successEl) successEl.style.display = "block";

  setTimeout(function () {
    window.open(
      "https://wa.me/918076302065?text=" + encodeURIComponent(text),
      "_blank",
    );
  }, 600);
}
