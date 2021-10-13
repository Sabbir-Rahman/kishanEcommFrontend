function categoryFinder(str) {
    switch (str) {
        case 'fruit':
            return 'ফল >>'
        case 'vegetables':
            return 'শাক-সবজি >>'
        case 'corps':
            return 'শস্য >>'
        case 'fish':
            return 'মাছ >>'
        case 'meat':
            return 'মাংস >>'
        case 'poultry':
            return 'পোল্ট্রিজাত পণ্য >>'
        case 'others':
            return 'অন্যান্য >>'
        default:
            return 'সার ও কীটনাশক >>'
    }
}

function divisionFinder(str) {
    console.log(str)

    switch (str) {
        case '&division=Dhaka':
            localStorage.removeItem('bibhag')
            return 'ঢাকা বিভাগ >>'
        case '&division=Chattogram':
            localStorage.removeItem('bibhag')
            return 'চট্টগ্রাম বিভাগ >>'
        case '&division=Rajshahi':
            localStorage.removeItem('bibhag')
            return 'রাজশাহী বিভাগ >>'
        case '&division=Khulna':
            localStorage.removeItem('bibhag')
            return 'খুলনা বিভাগ >>'
        case '&division=Barishal':
            localStorage.removeItem('bibhag')
            return 'বরিশাল বিভাগ >>'
        case '&division=Rangpur':
            localStorage.removeItem('bibhag')
            return 'রংপুর বিভাগ >>'
        case '&division=Sylhet':
            localStorage.removeItem('bibhag')
            return 'সিলেট বিভাগ'
        case '&division=Mymensingh':
            localStorage.removeItem('bibhag')
            return 'ময়মনসিংহ বিভাগ >>'
        default:
            return ''
    }
}

function districts(division) {
    switch (division) {
        case 'Dhaka':
            return (
                <>
                    <option value=''></option>
                    <option value=''>ঢাকা</option>
                    <option value=''>কিশোরগঞ্জ</option>
                    <option value=''>গাজীপুর</option>
                    <option value=''>গোপালগঞ্জ</option>
                    <option value=''>টাঙ্গাইল</option>
                    <option value=''>নরসিংদী</option>
                    <option value=''>নারায়ণগঞ্জ</option>
                    <option value=''>ফরিদপুর</option>
                    <option value=''>মাদারীপুর</option>
                    <option value=''>মানিকগঞ্জ</option>
                    <option value=''>মুন্সিগঞ্জ</option>
                    <option value=''>রাজবাড়ী</option>
                    <option value=''>শরীয়তপুর</option>
                </>
            )
        case 'Chattogram':
            return (
                <>
                    <option value=''></option>
                    <option value=''>কক্সবাজার</option>
                    <option value=''>কুমিল্লা</option>
                    <option value=''>খাগড়াছড়ি</option>
                    <option value=''>চট্টগ্রাম</option>
                    <option value=''>চাঁদপুর</option>
                    <option value=''>নোয়াখালী</option>
                    <option value=''>ফেনী</option>
                    <option value=''>বান্দরবান</option>
                    <option value=''>ব্রাহ্মণবাড়িয়া</option>
                    <option value=''>রাঙ্গামাটি</option>
                    <option value=''>লক্ষ্মীপুর</option>
                </>
            )
        case 'Rajshahi':
            return (
                <>
                    <option value=''></option>
                    <option value=''>চাঁপাইনবাবগঞ্জ</option>
                    <option value=''>জয়পুরহাট</option>
                    <option value=''>নওগাঁ</option>
                    <option value=''>নাটোর</option>
                    <option value=''>পাবনা</option>
                    <option value=''>বগুড়া</option>
                    <option value=''>রাজশাহী</option>
                    <option value=''>সিরাজগঞ্জ</option>
                </>
            )
        case 'Khulna':
            return (
                <>
                    <option value=''></option>
                    <option value=''>কুষ্টিয়া</option>
                    <option value=''>খুলনা</option>
                    <option value=''>চুয়াডাঙ্গা</option>
                    <option value=''>ঝিনাইদহ</option>
                    <option value=''>নড়াইল</option>
                    <option value=''>বাগেরহাট</option>
                    <option value=''>মাগুরা</option>
                    <option value=''>মেহেরপুর</option>
                    <option value=''>যশোর</option>
                    <option value=''>সাতক্ষীরা</option>
                </>
            )
        case 'Barishal':
            return (
                <>
                    <option value=''></option>
                    <option value=''>বরিশাল</option>
                    <option value=''>পটুয়াখালী</option>
                    <option value=''>ভোলা</option>
                    <option value=''>পিরোজপুর</option>
                    <option value=''>বরগুনা</option>
                    <option value=''>ঝালকাঠি</option>
                </>
            )
        case 'Rangpur':
            return (
                <>
                    <option value=''></option>
                    <option value=''>কুড়িগ্রাম</option>
                    <option value=''>গাইবান্ধা</option>
                    <option value=''>ঠাকুরগাঁও</option>
                    <option value=''>দিনাজপুর</option>
                    <option value=''>নীলফামারী</option>
                    <option value=''>পঞ্চগড়</option>
                    <option value=''>রংপুর</option>
                    <option value=''>লালমনিরহাট</option>
                </>
            )
        case 'Sylhet':
            return (
                <>
                    <option value=''></option>
                    <option value=''>সিলেট</option>
                    <option value=''>মৌলভীবাজার</option>
                    <option value=''>সুনামগঞ্জ</option>
                    <option value=''>হবিগঞ্জ</option>
                </>
            )
        case 'Mymensingh':
            return (
                <>
                    <option value=''></option>
                    <option value=''>জামালপুর</option>
                    <option value=''>নেত্রকোণা</option>
                    <option value=''>ময়মনসিংহ</option>
                    <option value=''>শেরপুর</option>
                </>
            )
        default:
            return <></>
    }
}

export { categoryFinder, divisionFinder, districts }