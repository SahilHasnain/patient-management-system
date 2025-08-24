export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Umar Ahmed",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Imran Khan",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Irfan Ansari",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Anas Raza",
  },
  {
    image: "/assets/images/dr-green.png",
    name: "Ayan Khan",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Asad Khan",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Umair Hasan",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Aslam Hasan",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Hassan Khan",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
