<template>
    <div>
        <sui-tab

                @change="handleChange"
                :active-index="activeIndex"
        >
            <sui-tab-pane icon="search grey">
                <sui-input placeholder="Search..." icon="search" class="grey" />
            </sui-tab-pane>
            <sui-tab-pane icon="tags grey">
                Box
            </sui-tab-pane>
        </sui-tab>
    </div>
</template>

<script>
    export default {
        name: 'FormTable',
        data: () => ({
            table: {
                inside: null,
                index: null,
                title: null,
            },
            activeIndex: null,
        }),
        mounted() {
            this.activatePane(0);
        },
        methods: {
            activatePane(index) {
                this.table.index = +index;
                this.activeIndex = +index;
            },
            handleChange(e, activePane, index) {
                this.table.inside = !!e;
                this.table.index = +index;
                this.table.title = activePane.title;
            },
        },
    };
</script>

<style scoped>
    .grey{
        background-color: rgb(226, 226,226);
    }

</style>
