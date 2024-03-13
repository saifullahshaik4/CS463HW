## Code Review Exercise

Write your code review here in markdown format.

### Issue #1 Color Consistency

The issue is that the background-color and border-color properties are set to the same value for both the .more-info-button and .form-button classes. This lack of contrast can make it difficult for users with visual impairments to distinguish between the button background and its border.

To fix this issue, we should ensure that the background-color and border-color properties have different values. This can be achieved by selecting appropriate colors that provide enough contrast between the background and border while maintaining the desired design aesthetic.

Initial code:
.more-info-button {
background-color: var(--darker-blue);
border: 1px solid var(--darker-blue);
}

.form-button {
background-color: var(--light-blue);
border: 1px solid var(--light-blue);
}
.form-button {
background-color: var(--darker-blue);
border: 1px solid var(--darker-blue);
}

Updated code:
.more-info-button {
background-color: var(--darker-blue);
border: 1px solid var(--dark-blue); /_changed border color_/
}
.form-button {
background-color: var(--light-blue);
border: 1px solid var(--dark-blue); /_ Changed border color _/
}
.form-button {
background-color: var(--darker-blue);
border: 1px solid var(--light-blue); /_ Changed border color _/
}

### Issue #2 Form Elements Missing Labels

The issue is that some form elements within the <div id="RequestInfo" class="content-container form"> are missing corresponding <label> elements. Labels are crucial for aiding users, particularly those using screen readers, in understanding what information to input into each form field.

Potential Solution:
To rectify this issue, we should add <label> elements for each form input. These labels should be associated with their corresponding input fields using the for attribute and the id of the input field.

Initial code:
<input aria-label="name" class="form-input-box" type="text" id="name" name="name" />

<p class="label-input-group form-element-container">
            <span class="form-label">Username</span>

            <input
              aria-label="username"
              class="form-input-box"
              type="text"
              id="username"
              name="username"
            />

          <p class="label-input-group form-element-container">
            <span class="form-label">Email</span>

            <input
              aria-label="email"
              class="form-input-box"
              type="email"
              id="email"
              name="email"
            />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Phone Number</span>

            <input
              aria-label="phone"
              class="form-input-box"
              type="tel"
              id="phone-number"
              name="phone-number"
            />

Updated Code:
<label for="name" class="form-label">Name</label>
<input aria-label="name" class="form-input-box" type="text" id="name" name="name" />

          <p class="label-input-group form-element-container">
            <span class="form-label">Username</span>
            <label for="username" class="form-label">Username</label>
            <input
              aria-label="username"
              class="form-input-box"
              type="text"
              id="username"
              name="username"
            />

          <p class="label-input-group form-element-container">
            <span class="form-label">Email</span>
            <label for="email" class="form-label">Email</label>
            <input
              aria-label="email"
              class="form-input-box"
              type="email"
              id="email"
              name="email"
            />
          </p>
          <p class="label-input-group form-element-container">
            <span class="form-label">Phone Number</span>
            <label for="phone number" class="form-label">Phone Number</label>
            <input
              aria-label="phone"
              class="form-input-box"
              type="tel"
              id="phone-number"
              name="phone-number"
            />

### Issue #3 Issue with Popup Sections

The issue is with the use of JavaScript to toggle the display of popup sections. While this approach works visually, it can cause accessibility issues because screen readers may not detect changes in the DOM's state triggered by JavaScript events. This means that users relying on screen readers might not be aware of the changes in content visibility, leading to a poor user experience.

Solution: To address this accessibility issue, it's recommended to use the hidden attribute instead of directly toggling the display property in JavaScript. The hidden attribute ensures that screen readers can properly detect changes in content visibility, improving accessibility for users with disabilities.

Initial code:
popupSection.style.display = "block";

Updated code:
// Instead of directly toggling display property Use the hidden attribute
popupSection.hidden = false;

By using the hidden attribute, we ensure that changes in content visibility are properly communicated to screen readers, enhancing the accessibility of the popup sections for all users.
