export default function handler(req, res) {
  res.status(200).json({ name: "Harsh Gupta", menuItems: [{
    label: "dashboard",
    id: "menu-1",
    selected: true,
  }, {
    label: "accounts",
    id: "menu-2",
  }, {
    label: "payments",
    id: "menu-3",
  }, {
    label: "expenses",
    id: "menu-4",
  }, {
    label: "teams",
    id: "menu-5",
  }] });
}
