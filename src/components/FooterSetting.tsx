const itemsListHome = [
    "Hero Section",
    "Features",
    "Properties",
    "Testimonials",
    "FAQ’s"
]

const itemsListAboutUs = [
    "Our Story",
    "Our Works",
    "How It Works",
    "Our Team",
    "Our Clients"
]

const itemsListProperties = [
    "Portfolio",
    "Categories",
]

const itemsListServices = [
    "Valuation Mastery",
    "Strategic Marketing",
    "Negotiation Wizardry",
    "Closing Success",
    "Property Management"
]

const itemsListContactUs = [
    "Contact Form",
    "Our Offices",
]


export function FooterSetting() {
    return (
        <div className="flex gap-24">
            <div>
            <h2 className="text-xl font-medium text-[#999999] mb-8">Home</h2>
            <ul className="text-lg font-medium text-white space-y-5">
                {itemsListHome.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>

            <div>
            <h2 className="text-xl font-medium text-[#999999] mb-8">About Us</h2>
            <ul className="text-lg font-medium text-white space-y-5">
                {itemsListAboutUs.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>

            <div>
            <h2 className="text-xl font-medium text-[#999999] mb-8">About Us</h2>
            <ul className="text-lg font-medium text-white space-y-5">
                {itemsListProperties.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>

            <div>
            <h2 className="text-xl font-medium text-[#999999] mb-8">About Us</h2>
            <ul className="text-lg font-medium text-white space-y-5">
                {itemsListServices.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>

            <div>
            <h2 className="text-xl font-medium text-[#999999] mb-8">About Us</h2>
            <ul className="text-lg font-medium text-white space-y-5">
                {itemsListContactUs.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}