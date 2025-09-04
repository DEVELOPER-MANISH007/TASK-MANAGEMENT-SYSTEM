const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile financial data and prepare July report.",
        "date": "2025-08-20",
        "category": "Report",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests from the frontend team.",
        "date": "2025-08-21",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend weekly sync-up with team members.",
        "date": "2025-08-22",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Client Demo",
        "description": "Present product features to client.",
        "date": "2025-08-23",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Take scheduled database backup.",
        "date": "2025-08-24",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fix",
        "description": "Fix issue in login API.",
        "date": "2025-08-25",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Documentation",
        "description": "Update API documentation.",
        "date": "2025-08-26",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "UI Design",
        "description": "Design new dashboard layout.",
        "date": "2025-08-20",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Perform system security check.",
        "date": "2025-08-21",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Training Session",
        "description": "Conduct training for new hires.",
        "date": "2025-08-22",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Performance Testing",
        "description": "Run load testing for the app.",
        "date": "2025-08-23",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Meeting with Manager",
        "description": "Discuss project progress with manager.",
        "date": "2025-08-24",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Deployment",
        "description": "Deploy new build to staging server.",
        "date": "2025-08-25",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare Slides",
        "description": "Create presentation for product launch.",
        "date": "2025-08-26",
        "category": "Work",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Market Research",
        "description": "Analyze competitor products.",
        "date": "2025-08-20",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Invoice",
        "description": "Generate invoices for clients.",
        "date": "2025-08-21",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Update",
        "description": "Update OS patches on servers.",
        "date": "2025-08-22",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Content Writing",
        "description": "Write blog post about new features.",
        "date": "2025-08-23",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]


const admin = [
  {
    id: 101,
    "name": "Suresh",
    "email": "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
