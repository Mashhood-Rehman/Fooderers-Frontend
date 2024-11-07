import { Icon } from '@iconify/react';

const features = [
  {
    icon: 'mdi:food-fork-drink',
    title: 'Wide Menu Selection',
    description: 'Explore a variety of dishes from appetizers to desserts, all made with fresh ingredients.',
  },
  {
    icon: 'mdi:security',
    title: 'Safe and Secure Payments',
    description: 'Our payment system is encrypted for your safety and convenience during checkout.',
  },
  {
    icon: 'mdi:clock',
    title: 'Fast Delivery',
    description: 'Enjoy hot and fresh food delivered to your doorstep in no time.',
  },
  {
    icon: 'mdi:star',
    title: 'Customer Reviews',
    description: 'Read honest reviews from our customers to make informed decisions on your next order.',
  },
  {
    icon: 'mdi:account',
    title: 'Personalized Account',
    description: 'Create an account to save your favorite dishes, view your order history, and more.',
  },
  {
    icon: 'mdi:map-marker',
    title: 'Multiple Locations',
    description: 'Order from your nearest branch and enjoy our food at multiple convenient locations.',
  },
];

function Features() {
  return (
    <div className=" font-[sans-serif]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-gray-800 text-4xl font-bold text-center mb-16">Discover Our Exclusive Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="p-8">
                <Icon
                  icon={feature.icon}
                  className="w-8 mb-6 text-orange-500"
                  
                  width={32}
                  height={32}
                />
                <h3 className="text-gray-800 text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
