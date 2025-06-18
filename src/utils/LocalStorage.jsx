const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new_task: false,
        failed: false,
        task_title: "Complete Project Report",
        task_description:
          "Prepare and submit the final report for the project.",
        task_date: "2025-06-18",
        task_category: "Management",
      },
      {
        active: false,
        new_task: true,
        failed: false,
        task_title: "Update Employee Records",
        task_description:
          "Ensure all employee details are current and accurate.",
        task_date: "2025-06-20",
        task_category: "HR",
      },
      {
        active: false,
        new_task: false,
        failed: true,
        task_title: "Resolve Client Complaints",
        task_description: "Address and fix issues raised by key clients.",
        task_date: "2025-06-15",
        task_category: "Customer Support",
      },
    ],
  },
  {
    id: 2,
    firstname: "Raj",
    email: "employee2@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        new_task: false,
        failed: false,
        task_title: "Develop Marketing Strategy",
        task_description: "Create a new campaign plan for product promotion.",
        task_date: "2025-06-25",
        task_category: "Marketing",
      },
      {
        active: false,
        new_task: true,
        failed: false,
        task_title: "Conduct Client Survey",
        task_description:
          "Gather feedback from customers for service improvement.",
        task_date: "2025-06-22",
        task_category: "Research",
      },
    ],
  },
  {
    id: 3,
    firstname: "Sneha",
    email: "employee3@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 3,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        new_task: false,
        failed: false,
        task_title: "Test Software Updates",
        task_description: "Run diagnostics on the latest system patches.",
        task_date: "2025-06-21",
        task_category: "IT",
      },
      {
        active: false,
        new_task: true,
        failed: true,
        task_title: "Resolve Security Breach",
        task_description: "Investigate and secure vulnerable company systems.",
        task_date: "2025-06-17",
        task_category: "Cybersecurity",
      },
    ],
  },
  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 0,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        new_task: false,
        failed: false,
        task_title: "Manage Team Training",
        task_description: "Organize training sessions for employees.",
        task_date: "2025-06-23",
        task_category: "HR",
      },
      {
        active: true,
        new_task: false,
        failed: false,
        task_title: "Coordinate Supply Chain",
        task_description:
          "Optimize vendor relationships and supply chain efficiency.",
        task_date: "2025-06-19",
        task_category: "Operations",
      },
    ],
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    task_count: {
      active: 1,
      new_task: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        new_task: true,
        failed: false,
        task_title: "Prepare Financial Report",
        task_description:
          "Analyze financial data and generate a quarterly report.",
        task_date: "2025-06-24",
        task_category: "Finance",
      },
      {
        active: true,
        new_task: false,
        failed: false,
        task_title: "Negotiate Vendor Contracts",
        task_description: "Renew and renegotiate deals with suppliers.",
        task_date: "2025-06-26",
        task_category: "Procurement",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    firstname: "Arjun",
    email: "admin@example.com",
    password: "123",
  },
  {
    id: 2,
    firstname: "kongkon",
    email: "kankanray059@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};
export const getLoclStorage = () => {
  let employees = JSON.parse(localStorage.getItem("employees"));
  let admin = JSON.parse(localStorage.getItem("Admin"));

  return { employees, admin };
};



