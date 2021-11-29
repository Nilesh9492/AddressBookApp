window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".contact-count").textContent = contactList.length;
  createInnerHtml();
});

const createInnerHtml = () => {
  if (contactList.length == 0) {
    return;
  }
  const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
  let innerHtml = `${headerHtml}`;
  for (let contact of contactList) {
    innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../assets/edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

let contactList = [
  {
    _id: 1,
    _name: "Nilesh",
    _phoneNumber: "91 9876543210",
    _address: "abc zxy",
    _city: "Dhl",
    _state: "MH",
    _zip: "456321",
  },
  {
    _id: 2,
    _name: "Nil",
    _phoneNumber: "91 9632587410",
    _address: "asd vbn",
    _city: "Dl",
    _state: "Mh",
    _zip: "654123",
  },
  {
    _id: 3,
    _name: "Sai",
    _phoneNumber: "91 999999999",
    _address: "Mumbai",
    _city: "Mumbai",
    _state: "MH",
    _zip: "412365",
  },
];
