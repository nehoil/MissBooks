export default {
    template: `
            <section class="book-filter">
            <div class="filter-title">
                    <h2>Add Book</h2>
                </div>
                <span class="filter-search-input">
                    <form @submit.prevent="emitFilter">
                   Title <input type="text" v-model="filterBy.byTitle" placeholder="Search here"/>
                    </form>
                    </span>
            </section>
    `,
    data() {
        return {
            filterBy: {
                byTitle: '',
                fromPrice: 0,
                toPrice: 1000,
                onSale: null
            }
        }
    },
    methods: {
        // emitFilter() {
        //     this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)))
        // }
    }
}
