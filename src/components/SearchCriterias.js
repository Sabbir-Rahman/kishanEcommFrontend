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
        case '&division=ঢাকা':
            localStorage.removeItem('bibhag')
            return 'ঢাকা বিভাগ >>'
        case '&division=চট্টগ্রাম':
            localStorage.removeItem('bibhag')
            return 'চট্টগ্রাম বিভাগ >>'
        case '&division=রাজশাহী':
            localStorage.removeItem('bibhag')
            return 'রাজশাহী বিভাগ >>'
        case '&division=খুলনা':
            localStorage.removeItem('bibhag')
            return 'খুলনা বিভাগ >>'
        case '&division=বরিশাল':
            localStorage.removeItem('bibhag')
            return 'বরিশাল বিভাগ >>'
        case '&division=রংপুর':
            localStorage.removeItem('bibhag')
            return 'রংপুর বিভাগ >>'
        case '&division=সিলেট':
            localStorage.removeItem('bibhag')
            return 'সিলেট বিভাগ'
        case '&division=ময়মনসিংহ':
            localStorage.removeItem('bibhag')
            return 'ময়মনসিংহ বিভাগ >>'
        default:
            return ''
    }
}

function districts(division) {
    switch (division) {
        case 'ঢাকা':
            return (
                <>
                    <option value=''></option>
                    <option value='ঢাকা'>ঢাকা</option>
                    <option value='কিশোরগঞ্জ'>কিশোরগঞ্জ</option>
                    <option value='গাজীপুর'>গাজীপুর</option>
                    <option value='গোপালগঞ্জ'>গোপালগঞ্জ</option>
                    <option value='টাঙ্গাইল'>টাঙ্গাইল</option>
                    <option value='নরসিংদী'>নরসিংদী</option>
                    <option value='নারায়ণগঞ্জ'>নারায়ণগঞ্জ</option>
                    <option value='ফরিদপুর'>ফরিদপুর</option>
                    <option value='মাদারীপুর'>মাদারীপুর</option>
                    <option value='মানিকগঞ্জ'>মানিকগঞ্জ</option>
                    <option value='মুন্সিগঞ্জ'>মুন্সিগঞ্জ</option>
                    <option value='রাজবাড়ী'>রাজবাড়ী</option>
                    <option value='শরীয়তপুর'>শরীয়তপুর</option>
                </>
            )
        case 'চট্টগ্রাম':
            return (
                <>
                    <option value=''></option>
                    <option value='কক্সবাজার'>কক্সবাজার</option>
                    <option value='কুমিল্লা'>কুমিল্লা</option>
                    <option value='খাগড়াছড়ি'>খাগড়াছড়ি</option>
                    <option value='চট্টগ্রাম'>চট্টগ্রাম</option>
                    <option value='চাঁদপুর'>চাঁদপুর</option>
                    <option value='নোয়াখালী'>নোয়াখালী</option>
                    <option value='ফেনী'>ফেনী</option>
                    <option value='বান্দরবান'>বান্দরবান</option>
                    <option value='ব্রাহ্মণবাড়িয়া'>ব্রাহ্মণবাড়িয়া</option>
                    <option value='রাঙ্গামাটি'>রাঙ্গামাটি</option>
                    <option value='লক্ষ্মীপুর'>লক্ষ্মীপুর</option>
                </>
            )
        case 'রাজশাহী':
            return (
                <>
                    <option value=''></option>
                    <option value='চাঁপাইনবাবগঞ্জ'>চাঁপাইনবাবগঞ্জ</option>
                    <option value='জয়পুরহাট'>জয়পুরহাট</option>
                    <option value='নওগাঁ'>নওগাঁ</option>
                    <option value='নাটোর'>নাটোর</option>
                    <option value='পাবনা'>পাবনা</option>
                    <option value='বগুড়া'>বগুড়া</option>
                    <option value='রাজশাহী'>রাজশাহী</option>
                    <option value='সিরাজগঞ্জ'>সিরাজগঞ্জ</option>
                </>
            )
        case 'খুলনা':
            return (
                <>
                    <option value=''></option>
                    <option value='কুষ্টিয়া'>কুষ্টিয়া</option>
                    <option value='খুলনা'>খুলনা</option>
                    <option value='চুয়াডাঙ্গা'>চুয়াডাঙ্গা</option>
                    <option value='ঝিনাইদহ'>ঝিনাইদহ</option>
                    <option value='নড়াইল'>নড়াইল</option>
                    <option value='বাগেরহাট'>বাগেরহাট</option>
                    <option value='মাগুরা'>মাগুরা</option>
                    <option value='মেহেরপুর'>মেহেরপুর</option>
                    <option value='যশোর'>যশোর</option>
                    <option value='সাতক্ষীরা'>সাতক্ষীরা</option>
                </>
            )
        case 'বরিশাল':
            return (
                <>
                    <option value=''></option>
                    <option value='বরিশাল'>বরিশাল</option>
                    <option value='পটুয়াখালী'>পটুয়াখালী</option>
                    <option value='ভোলা'>ভোলা</option>
                    <option value='পিরোজপুর'>পিরোজপুর</option>
                    <option value='বরগুনা'>বরগুনা</option>
                    <option value='ঝালকাঠি'>ঝালকাঠি</option>
                </>
            )
        case 'রংপুর':
            return (
                <>
                    <option value=''></option>
                    <option value='কুড়িগ্রাম'>কুড়িগ্রাম</option>
                    <option value='গাইবান্ধা'>গাইবান্ধা</option>
                    <option value='ঠাকুরগাঁও'>ঠাকুরগাঁও</option>
                    <option value='দিনাজপুর'>দিনাজপুর</option>
                    <option value='নীলফামারী'>নীলফামারী</option>
                    <option value='পঞ্চগড়'>পঞ্চগড়</option>
                    <option value='রংপুর'>রংপুর</option>
                    <option value='লালমনিরহাট'>লালমনিরহাট</option>
                </>
            )
        case 'সিলেট':
            return (
                <>
                    <option value=''></option>
                    <option value='সিলেট'>সিলেট</option>
                    <option value='মৌলভীবাজার'>মৌলভীবাজার</option>
                    <option value='সুনামগঞ্জ'>সুনামগঞ্জ</option>
                    <option value='হবিগঞ্জ'>হবিগঞ্জ</option>
                </>
            )
        case 'ময়মনসিংহ':
            return (
                <>
                    <option value=''></option>
                    <option value='জামালপুর'>জামালপুর</option>
                    <option value='নেত্রকোণা'>নেত্রকোণা</option>
                    <option value='ময়মনসিংহ'>ময়মনসিংহ</option>
                    <option value='শেরপুর'>শেরপুর</option>
                </>
            )
        default:
            return <></>
    }
}

export { categoryFinder, divisionFinder, districts }