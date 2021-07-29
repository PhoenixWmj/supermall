import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop";

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
        // console.log('mixin mounted');

    },
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 1000);
        },
    }
}