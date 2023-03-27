export default function handler(req, res) {
  res.status(200).json({
    "userDetails": {
      "name": {
        "firstName": "Jason",
        "lastName": "Reynolds"
      },
      "tier": "Executive"
    },
    "greeting": "What a happy day it is",
    "menuItems": [
      {
        "label": "dashboard",
        "id": "menu-1",
        "selected": true
      },
      {
        "label": "accounts",
        "id": "menu-2"
      },
      {
        "label": "payments",
        "id": "menu-3"
      },
      {
        "label": "expenses",
        "id": "menu-4"
      },
      {
        "label": "teams",
        "id": "menu-5"
      }
    ],
    "sideMenuItems": [
      {
        "label": "Send money",
        "subtitle": "Pay a vendor",
        "id": "sidemenu-1"
      },
      {
        "label": "Add funds",
        "subtitle": "Add money to you wallet",
        "id": "sidemenu-2"
      },
      {
        "label": "Transfer between accounts",
        "subtitle": "Move money at guaranteed rates",
        "id": "sidemenu-3"
      },
      {
        "label": "Make a payment",
        "subtitle": "Pay into your credit line",
        "id": "sidemenu-4"
      }
    ],
    "myEmployees": [
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-1",
        "isVerified": true,
        "image": {
          "src": "https://mui.com/static/images/avatar/1.jpg"
        }
      },
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-2",
        "isVerified": true,
        "image": {
          "src": "https://mui.com/static/images/avatar/2.jpg"
        }
      },
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-3",
        "image": {
          "src": "https://mui.com/static/images/avatar/3.jpg"
        }
      },
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-4",
        "image": {
          "src": "https://mui.com/static/images/avatar/4.jpg"
        }
      },
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-5",
        "image": {
          "src": "https://mui.com/static/images/avatar/5.jpg"
        }
      },
      {
        "label": "Andre James",
        "subtitle": "@andre",
        "id": "employee-6",
        "image": {
          "src": "https://mui.com/static/images/avatar/6.jpg"
        }
      }
    ]
  });
}
