export let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read(a, b) {
        this.a = a;
        this.b = b;
    }
};
