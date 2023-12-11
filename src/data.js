
const cars = [
    {
        "id": "1",
        "type": "موتور سیکلت",
        "system": "هوندا",
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
        "serial_number": "",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "دادگستری شهرستان باغملک",
        "description": ""
    },
    {
        "id": "2",
        "type": "موتور سیکلت",
        "system": "هوندا",
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
        "serial_number": "",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "دادگستری شهرستان اندیمشک",
        "description": ""
    },
    {
        "id": "3",
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
        "serial_number": "",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "دادگستری شهرستان باغملک",
        "description": ""
    },
    {
        "id": "4",
        "type": "خودرو",
        "system": "سانتافه",
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
        "serial_number": "",
        "status": "active",
        "owner_type": "مامور به خدمت",
        "owner": "دادگستری شهرستان باغملک",
        "description": ""
    },
];

const columns = [
    {
        key: "id",
        label: "کد",
    },
    {
        key: "role",
        label: "ثبت نام کننده",
    },
    {
        key: "name",
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
        key: "serial",
        label: "سریال",
    },
    {
        key: "motor",
        label: "شماره موتور",
    },
    {
        key: "shasi",
        label: "شماره شاسی",
    },
    {
        key: "type",
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
    {key: "id", label: "کد", size: 1},
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