export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black">
                <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-3">
                <button type="submit" class="bg-white p-3">Add</button>
            </div>
        </form>
    
    `,

    data(){
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){

            this.$emit('add', this.newAssignment)

            this.newAssignment = ''

        }
    }
}