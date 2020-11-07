var cache = {
    set: (key, val, ttl) => {
        const data = {
            value: val,
            exp: new Date().getTime() + ttl * 1000,
        };
        localStorage.setItem(key.toString(), JSON.stringify(data));
    },
    get: (key) => {
        var cache = JSON.parse(localStorage.getItem(key.toString()));
        if (cache) {
            if (cache.exp && cache.exp < new Date().getTime()) {
                localStorage.removeItem(key.toString());
            } else {
                return cache.value;
            }
        }
        return null;
    },
    remove: (key) => localStorage.removeItem(key.toString()),
    reset: () => localStorage.clear(),
};

export default cache;
