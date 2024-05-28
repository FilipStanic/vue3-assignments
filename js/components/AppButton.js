export default {
    template: `
    <button 
        :class="{
            'border rounded-lg px-3 py-2 m-2 disabled:cursor-not-allowed' : true,
            'bg-blue-500 hover:bg-blue-600' : type === 'primary',
            'bg-yellow-500 hover:bg-yellow-600' : type === 'warning',
            'bg-red-500 hover:bg-red-600' : type === 'danger',
        }"
        :disabled="processing"
        >
    
        <slot/>
    </button>
    `,

    props: {
        processing: {
            type: Boolean,
            default: false
        },
        
        type: {
            type: String,
            default: 'primary'
        }
    },
}