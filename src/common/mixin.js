import { debounce } from "common/utils";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        };
    },
    mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh, 200);
        this.itemImgListener = () => {
            // this.$refs.scroll.refresh();
            this.refresh();
        };
        this.$bus.$on("itemImageLoad", this.itemImgListener);
        console.log('mixin mounted');

    },
}