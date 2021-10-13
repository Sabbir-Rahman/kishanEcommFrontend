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

export { categoryFinder, divisionFinder }