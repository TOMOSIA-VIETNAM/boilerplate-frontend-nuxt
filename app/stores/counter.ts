import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    history: [] as number[],
    future: [] as number[],
    autoIncrementing: false as boolean,
    intervalId: null as ReturnType<typeof setInterval> | null,
    log: [] as string[],
  }),
  getters: {
    isEven: (state) => state.count % 2 === 0,
    isPositive: (state) => state.count > 0,
    canUndo: (state) => state.history.length > 0,
    canRedo: (state) => state.future.length > 0,
    isRound: (state) => state.count % 10 === 0 && state.count !== 0,
    isNegative: (state) => state.count < 0,
  },
  actions: {
    debugState() {
      console.log({
        count: this.count,
        history: this.history,
        future: this.future,
        autoIncrementing: this.autoIncrementing,
        log: this.log,
      });
    },
    pushHistory() {
      this.history.push(this.count);
      this.future = [];
    },
    increment() {
      this.pushHistory();
      this.count++;
      this.log.push(`+1 → ${this.count}`);
    },
    decrement() {
      this.pushHistory();
      this.count--;
      this.log.push(`-1 → ${this.count}`);
    },
    reset() {
      this.pushHistory();
      this.count = 0;
      this.log.push(`Reset → 0`);
    },
    double() {
      this.pushHistory();
      this.count *= 2;
      this.log.push(`x2 → ${this.count}`);
    },
    setValue(val: number) {
      this.pushHistory();
      this.count = val;
      this.log.push(`Set → ${val}`);
    },
    random() {
      this.pushHistory();
      const val = Math.floor(Math.random() * 201) - 100; // -100 to 100
      this.count = val;
      this.log.push(`Random → ${val}`);
    },
    async incrementAsync() {
      this.pushHistory();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.count++;
      this.log.push(`+1 (Async) → ${this.count}`);
    },
    undo() {
      if (this.history.length > 0) {
        this.future.unshift(this.count);
        this.count = this.history.pop()!;
        this.log.push(`Undo → ${this.count}`);
      }
    },
    redo() {
      if (this.future.length > 0) {
        this.history.push(this.count);
        this.count = this.future.shift()!;
        this.log.push(`Redo → ${this.count}`);
      }
    },
    startAutoIncrement() {
      if (this.autoIncrementing) return;
      this.autoIncrementing = true;
      this.intervalId = setInterval(() => {
        this.increment();
      }, 1000);
      this.log.push('Auto increment started');
    },
    stopAutoIncrement() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.autoIncrementing = false;
      this.log.push('Auto increment stopped');
    },
    clearLog() {
      this.log = [];
    },
  },
});
