
const cars = [
    {
        "id": "1",
        "user": "علی رضایی",
        "type": "موتور سیکلت",
        "system": "هوندا",
        "tip": "125",
        "color": "قرمز",
        "model": "1394",
        "fuel": "petrol",
        "capacity": "4",
        "cylinder": "4",
        "axis": "0",
        "motor_number": "Ac5126",
        "chassis_number": "1",
        "number": "565/42971",
        "serial_number": "50136900",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "دادگستری شهرستان باغملک",
        "description": ""
    },
    {
        "id": "2",
        "user": "علی رضایی",
        "type": "موتور سیکلت",
        "system": "هوندا",
        "tip": "125",
        "color": "قرمز",
        "model": "1394",
        "fuel": "petrol",
        "capacity": "4",
        "cylinder": "4",
        "axis": "0",
        "motor_number": "65000",
        "chassis_number": "1",
        "number": "565/42971",
        "serial_number": "962036900",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "شهرستان اهواز",
        "description": ""
    },
    {
        "id": "3",
        "user": "علی رضایی",
        "type": "خودرو",
        "system": "پژو",
        "tip": "125",
        "color": "قرمز",
        "model": "1394",
        "fuel": "petrol",
        "capacity": "4",
        "cylinder": "4",
        "axis": "0",
        "motor_number": "0",
        "chassis_number": "1",
        "number": "565/42971",
        "serial_number": "1259800",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "شهرستان آبادان",
        "description": ""
    },
    {
        "id": "4",
        "user": "علی حسینی",
        "type": "خودرو",
        "system": "سانتافه",
        "tip": "125",
        "color": "قرمز",
        "model": "1394",
        "fuel": "gas",
        "capacity": "4",
        "cylinder": "4",
        "axis": "4",
        "motor_number": "98002510",
        "chassis_number": "1",
        "number": "565/42971",
        "serial_number": "9002525",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "شهرستان باغملک",
        "description": ""
    },
];

const columns = [
    {
        key: "id",
        label: "کد",
    },
    {
        key: "user",
        label: "ثبت نام کننده",
    },
    {
        key: "type",
        label: "نام",
    },
    {
        key: "system",
        label: "سیستم",
    },
    {
        key: "number",
        label: "شماره",
    },
    {
        key: "serial_number",
        label: "سریال",
    },
    {
        key: "motor_number",
        label: "شماره موتور",
    },
    {
        key: "chassis_number",
        label: "شماره شاسی",
    },
    {
        key: "owner_type",
        label: "نوع مالکیت",
    },
];


const fuelOptions = [
    {value: "petrol", label: "بنزین"},
    {value: "gas", label: "گاز"},
]

const statusOptions = [
    {value: "active", label: "فعال"},
    {value: "inactive", label: "غیر فعال"},
]

const fields_one = [
    {key: "id", label: "کد", size: 1, readOnly: true},
    {key: "type", label: "نوع", size: 3},
    {key: "system", label: "سیستم", size: 2},
    {key: "tip", label: "تیپ", size: 2},
    {key: "color", label: "رنگ"},
    {key: "model", label: "مدل"},

    {key: "fuel", label: "سوخت", size: 3, type: "select", data: fuelOptions},
    {key: "capacity", label: "ظرفیت"},
    {key: "cylinder", label: "سیلندر"},
    {key: "axis", label: "محور"},
    {key: "motor_number", label: "شماره موتور", size: 3},

    {key: "chassis_number", label: "شماره شاسی", size: 4},
    {key: "number", label: "شماره", size: 4},
    {key: "serial_number", label: "سریال", size: 4},
    {key: "status", label: "وضعیت", size: 4, type: "select", data: statusOptions},

    {key: "owner_type", label: "نوع مالکیت", size: 4},
    {key: "owner", label: "مالک", size: 4},
    {key: "description", label: "توضیحات", size: 4},
]

export {cars, columns, fuelOptions, statusOptions, fields_one}