/**
 * District List [Divisions only]
 * Array Object
 * @key [District name]
 * @name {Dhaka, Chittagong, Rajshahai, Khulna, Barishal, Sylhet, Rangpur, Mymensing}
 * @bnName {চট্টগ্রাম , রাজশাহী , খুলনা , বরিশাল , সিলেট , ঢাকা , রংপুর , ময়মনসিংহ}
 * @addMinute {Additinal time when district changes} addMinute
 */
const districts = {
    Dhaka: {
        name: "Dhaka",
        bnName: "ঢাকা",
        addMinute: 0,
    },
    Chittagong: {
        name: "Chittagong",
        bnName: "চট্টগ্রাম",
        addMinute: 0,
    },
    Rajshahi: {
        name: "Rajshahi",
        bnName: "রাজশাহী",
        addMinute: 0,
    },
    Khulna: {
        name: "Khulna",
        bnName: "খুলনা",
        addMinute: 0,
    },
    Barishal: {
        name: "Barishal",
        bnName: "বরিশাল",
        addMinute: -02,
    },
    Sylhet: {
        name: "Sylhet",
        bnName: "সিলেট",
        addMinute: 0,
    },
    Rangpur: {
        name: "Rangpur",
        bnName: "রংপুর",
        addMinute: 0,
    },
    Mymensingh: {
        name: "Mymensingh",
        bnName: "ময়মনসিংহ",
        addMinute: 0,
    },
    Borguna: {
        name: "Borguna",
        bnName: "বরগুনা",
        addMinute: 0,
    },
    Bhola: {
        name: "Bhola",
        bnName: "ভোলা",
        addMinute: 0,
    },
    Jhalakathi: {
        name: "jhalakathi",
        bnName: "ঝালকাঠি",
        addMinute: 0,
    },
    Pirojpur: {
        name: "Pirojpur",
        bnName: "পিরোজপুর",
        addMinute: 0,
    },
    Patuakhali: {
        name: "Patuakhali",
        bnName: "পটুয়াখালী",
        addMinute: 0,
    },
    Bandarban: {
        name: "Bandarban",
        bnName: "বান্দরবান",
        addMinute: 0,
    },
    Rangamati: {
        name: "Rangamati",
        bnName: "রাঙামাটি",
        addMinute: 0,
    },
    Khagrachari: {
        name: "khagrachari",
        bnName: "খাগড়াছড়ি",
        addMinute: 0,
    },
    coxsbazar: {
        name: "coxsbazar",
        bnName: "কক্সবাজার",
        addMinute: 0,
    },
    Feni: {
        name: "feni",
        bnName: "ফেনী",
        addMinute: 0,
    },
    Noakhali: {
        name: "noakhali",
        bnName: "নোয়াখালী",
        addMinute: 0,
    },
    Lokkhipur: {
        name: "lokkhipur",
        bnName: "লক্ষ্মীপুর",
        addMinute: 0,
    },
    Comilla: {
        name: "comilla",
        bnName: "কুমিল্লা",
        addMinute: 0,
    },
    Brahmanbaria: {
        name: "brahmanbaria",
        bnName: "ব্রাহ্মণবাড়িয়া",
        addMinute: 0,
    },
    Manikganj: {
        name: "manikganj",
        bnName: "মানিকগঞ্জ",
        addMinute: 0,
    },
    Gazipur: {
        name: "gazipur",
        bnName: "গাজীপুর",
        addMinute: 0,
    },
    Narayanganj: {
        name: "narayanganj",
        bnName: "নারায়ণগঞ্জ",
        addMinute: 0,
    },
    Tangail: {
        name: "tangail",
        bnName: "টাঙ্গাইল",
        addMinute: 0,
    },
    Madaripur: {
        name: "madaripur",
        bnName: "মাদারীপুর",
        addMinute: 0,
    },
    Jamalpur: {
        name: "jamalpur",
        bnName: "জামালপুর",
        addMinute: 0,
    },
    Munshiganj: {
        name: "munshiganj",
        bnName: "মুন্সিগঞ্জ",
        addMinute: 0,
    },
    gopalganj: {
        name: "gopalganj",
        bnName: "গোপালগঞ্জ",
        addMinute: 0,
    },
    Sherpur: {
        name: "sherpur",
        bnName: "শেরপুর",
        addMinute: 0,
    },
    Kishoreganj: {
        name: "kishoreganj",
        bnName: "কিশোরগঞ্জ",
        addMinute: 0,
    },
    Narsingdi: {
        name: "narsingdi",
        bnName: "নরসিংদী",
        addMinute: 0,
    },
    Shariatpur: {
        name: "shariatpur",
        bnName: "শরীয়তপুর",
        addMinute: 0,
    },
    Netrokona: {
        name: "netrokona",
        bnName: "নেত্রকোনা",
        addMinute: 0,
    },
    Rajbari: {
        name: "rajbari",
        bnName: "রাজবাড়ী",
        addMinute: 0,
    },
    Faridpur: {
        name: "faridpur",
        bnName: "ফরিদপুর",
        addMinute: 0,
    },
    Bagerhat: {
        name: "bagerhat",
        bnName: "বাগেরহাট",
        addMinute: 0,
    },
    Jessore: {
        name: "jessore",
        bnName: "যশোর",
        addMinute: 0,
    },
    Jhenaidah: {
        name: "jhenaidah",
        bnName: "ঝিনাইদহ",
        addMinute: 0,
    },
    Kushtia: {
        name: "kushtia",
        bnName: "কুষ্টিয়া",
        addMinute: 0,
    },
    Magura: {
        name: "magura",
        bnName: "মাগুরা",
        addMinute: 0,
    },
    Meherpur: {
        name: "meherpur",
        bnName: "মেহেরপুর",
        addMinute: 0,
    },
    Narail: {
        name: "narail",
        bnName: "নড়াইল",
        addMinute: 0,
    },
    Satkhira: {
        name: "satkhira",
        bnName: "সাতক্ষীরা",
        addMinute: 0,
    },
    Bogra: {
        name: "bogra",
        bnName: "বগুড়া",
        addMinute: 0,
    },
    Joypurhat: {
        name: "joypurhat",
        bnName: "জয়পুরহাট",
        addMinute: 0,
    },
    Noga: {
        name: "noga",
        bnName: "নওগাঁ",
        addMinute: 0,
    },
    Natore: {
        name: "natore",
        bnName: "নাটোর",
        addMinute: 0,
    },
    Pabna: {
        name: "pabna",
        bnName: "পাবনা",
        addMinute: 0,
    },
    rajshahi: {
        name: "rajshahi",
        bnName: "রাজশাহী",
        addMinute: 0,
    },
    Sirajganj: {
        name: "sirajganj",
        bnName: "সিরাজগঞ্জ",
        addMinute: 0,
    },
    Dinajpur: {
        name: "dinajpur",
        bnName: "দিনাজপুর",
        addMinute: 0,
    },
    Gaibandha: {
        name: "gaibandha",
        bnName: "গাইবান্ধা",
        addMinute: 0,
    },
    Kurigram: {
        name: "kurigram",
        bnName: "কুড়িগ্রাম",
        addMinute: 0,
    },
    Lalmonirhat: {
        name: "Lalmonirhat",
        bnName: "লালমনিরহাট",
        addMinute: 0,
    },
    Nilphamari: {
        name: "nilphamari",
        bnName: "নীলফামারী",
        addMinute: 0,
    },
    Panchagarh: {
        name: "panchagarh",
        bnName: "পঞ্চগড়",
        addMinute: 0,
    },
    Thakurgaon: {
        name: "thakurgaon",
        bnName: "ঠাকুরগাঁও",
        addMinute: 0,
    },
    Habiganj: {
        name: "habiganj",
        bnName: "হবিগঞ্জ",
        addMinute: 0,
    },
    Moulvibazar: {
        name: "moulvibazar",
        bnName: "মৌলভীবাজার",
        addMinute: 0,
    },
    sunamganj: {
        name: "sunamganj",
        bnName: "সুনামগঞ্জ",
        addMinute: 0,
    },
    sunamganj: {
        name: "sunamganj",
        bnName: "সুনামগঞ্জ",
        addMinute: 0,
    },
    chapainawabganj: {
        name: "chapainawabganj",
        bnName: "চাঁপাইনবাবগঞ্জ",
        addMinute: 0,
    },
};
