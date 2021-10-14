function categoryFinder(str) {
    switch (str) {
        case 'fruit':
            return 'ফল >>'
        case 'vegetables':
            return 'শাক-সবজি >>'
        case 'corps':
            return 'শস্য ও বীজ>>'
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
                    <option value='Dhaka'>ঢাকা</option>
                    <option value='Kishorganj'>কিশোরগঞ্জ</option>
                    <option value='Gazipur'>গাজীপুর</option>
                    <option value='Gopalgonj'>গোপালগঞ্জ</option>
                    <option value='Tangail'>টাঙ্গাইল</option>
                    <option value='Narsingdi'>নরসিংদী</option>
                    <option value='Narayanganj'>নারায়ণগঞ্জ</option>
                    <option value='Faridpur'>ফরিদপুর</option>
                    <option value='Madaripur'>মাদারীপুর</option>
                    <option value='Manikganj'>মানিকগঞ্জ</option>
                    <option value='Munsiganj'>মুন্সিগঞ্জ</option>
                    <option value='Rajbari'>রাজবাড়ী</option>
                    <option value='Sariyatpur'>শরীয়তপুর</option>
                </>
            )
        case 'Chattogram':
            return (
                <>
                    <option value=''></option>
                    <option value='CoxsBazar'>কক্সবাজার</option>
                    <option value='Comilla'>কুমিল্লা</option>
                    <option value='Khagrachari'>খাগড়াছড়ি</option>
                    <option value='Chattogram'>চট্টগ্রাম</option>
                    <option value='Chandpur'>চাঁদপুর</option>
                    <option value='Noakhali'>নোয়াখালী</option>
                    <option value='Feni'>ফেনী</option>
                    <option value='Bandarban'>বান্দরবান</option>
                    <option value='Brahmanbaria'>ব্রাহ্মণবাড়িয়া</option>
                    <option value='Rangamati'>রাঙ্গামাটি</option>
                    <option value='Lakshmipur'>লক্ষ্মীপুর</option>
                </>
            )
        case 'Rajshahi':
            return (
                <>
                    <option value=''></option>
                    <option value='Chapainababganj'>চাঁপাইনবাবগঞ্জ</option>
                    <option value='Joypurhat'>জয়পুরহাট</option>
                    <option value='Naogaun'>নওগাঁ</option>
                    <option value='Natore'>নাটোর</option>
                    <option value='Pabna'>পাবনা</option>
                    <option value='Bogra'>বগুড়া</option>
                    <option value='Rajshahi'>রাজশাহী</option>
                    <option value='Sirajganj'>সিরাজগঞ্জ</option>
                </>
            )
        case 'Khulna':
            return (
                <>
                    <option value=''></option>
                    <option value='Kustia'>কুষ্টিয়া</option>
                    <option value='Khulna'>খুলনা</option>
                    <option value='Chuadanga'>চুয়াডাঙ্গা</option>
                    <option value='Jhinaidaha'>ঝিনাইদহ</option>
                    <option value='Norail'>নড়াইল</option>
                    <option value='Bagerhat'>বাগেরহাট</option>
                    <option value='Magura'>মাগুরা</option>
                    <option value='Meherpur'>মেহেরপুর</option>
                    <option value='Jessore'>যশোর</option>
                    <option value='Satkhira'>সাতক্ষীরা</option>
                </>
            )
        case 'Barishal':
            return (
                <>
                    <option value=''></option>
                    <option value='Barishal'>বরিশাল</option>
                    <option value='Patuakhali'>পটুয়াখালী</option>
                    <option value='Bhola'>ভোলা</option>
                    <option value='Pirozpur'>পিরোজপুর</option>
                    <option value='Barguna'>বরগুনা</option>
                    <option value='Jhalkathi'>ঝালকাঠি</option>
                </>
            )
        case 'Rangpur':
            return (
                <>
                    <option value=''></option>
                    <option value='Kurigram'>কুড়িগ্রাম</option>
                    <option value='Gaibandha'>গাইবান্ধা</option>
                    <option value='Thakurgaun'>ঠাকুরগাঁও</option>
                    <option value='Dinajpur'>দিনাজপুর</option>
                    <option value='Nilphamari'>নীলফামারী</option>
                    <option value='Panchagarh'>পঞ্চগড়</option>
                    <option value='Rangpur'>রংপুর</option>
                    <option value='Lalmonirhat'>লালমনিরহাট</option>
                </>
            )
        case 'Sylhet':
            return (
                <>
                    <option value=''></option>
                    <option value='Sylhet'>সিলেট</option>
                    <option value='Moulabhibazar'>মৌলভীবাজার</option>
                    <option value='Sunamganj'>সুনামগঞ্জ</option>
                    <option value='Habiganj'>হবিগঞ্জ</option>
                </>
            )
        case 'Mymensingh':
            return (
                <>
                    <option value=''></option>
                    <option value='Jamalpur'>জামালপুর</option>
                    <option value='Netrokona'>নেত্রকোণা</option>
                    <option value='Mymensingh'>ময়মনসিংহ</option>
                    <option value='Sherpur'>শেরপুর</option>
                </>
            )
        default:
            return <></>
    }
}

export { categoryFinder, divisionFinder, districts }