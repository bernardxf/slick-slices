import { FaPepperHot } from 'react-icons/fa';

export default {
    // Computer Name
    name: 'topping',
    // Visible Name
    title: 'Toppings',
    type: 'document',
    icon: FaPepperHot,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'What is the name of topping?',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'What is the name of topping?',
            options: {
                layout: 'checkbox',
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🌱' : ''}`,
        }),
    }
};