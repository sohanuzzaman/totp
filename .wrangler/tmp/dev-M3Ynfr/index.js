var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs
var subtle;
var init_web = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    subtle = globalThis.crypto?.subtle;
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs
var webcrypto, createCipher, createDecipher, pseudoRandomBytes, Cipher, Decipher;
var init_node = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    webcrypto = new Proxy(globalThis.crypto, { get(_, key) {
      if (key === "CryptoKey") {
        return globalThis.CryptoKey;
      }
      if (typeof globalThis.crypto[key] === "function") {
        return globalThis.crypto[key].bind(globalThis.crypto);
      }
      return globalThis.crypto[key];
    } });
    createCipher = /* @__PURE__ */ notImplemented("crypto.createCipher");
    createDecipher = /* @__PURE__ */ notImplemented("crypto.createDecipher");
    pseudoRandomBytes = /* @__PURE__ */ notImplemented("crypto.pseudoRandomBytes");
    Cipher = /* @__PURE__ */ notImplementedClass("crypto.Cipher");
    Decipher = /* @__PURE__ */ notImplementedClass("crypto.Decipher");
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/crypto.mjs
var init_crypto = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/crypto.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_web();
    init_node();
  }
});

// ../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs
var workerdCrypto, Certificate, checkPrime, checkPrimeSync, constants, Cipheriv, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, Decipheriv, diffieHellman, DiffieHellman, DiffieHellmanGroup, ECDH, fips, generateKey, generateKeyPair, generateKeyPairSync, generateKeySync, generatePrime, generatePrimeSync, getCipherInfo, getCiphers, getCurves, getDiffieHellman, getFips, getHashes, getRandomValues, hash, Hash, hkdf, hkdfSync, Hmac, KeyObject, pbkdf2, pbkdf2Sync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomBytes, randomFill, randomFillSync, randomInt, randomUUID, scrypt, scryptSync, secureHeapUsed, setEngine, setFips, sign, Sign, subtle2, timingSafeEqual, verify, Verify, X509Certificate, webcrypto2, crypto_default;
var init_crypto2 = __esm({
  "../../.npm/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate,
      checkPrime,
      checkPrimeSync,
      constants,
      Cipheriv: (
        // @ts-expect-error
        Cipheriv
      ),
      createCipheriv,
      createDecipheriv,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createECDH,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      createSign,
      createVerify,
      Decipheriv: (
        // @ts-expect-error
        Decipheriv
      ),
      diffieHellman,
      DiffieHellman,
      DiffieHellmanGroup,
      ECDH,
      fips,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCipherInfo,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hash,
      Hash,
      hkdf,
      hkdfSync,
      Hmac,
      KeyObject,
      pbkdf2,
      pbkdf2Sync,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      scrypt,
      scryptSync,
      secureHeapUsed,
      setEngine,
      setFips,
      sign,
      Sign,
      subtle: subtle2,
      timingSafeEqual,
      verify,
      Verify,
      X509Certificate
    } = workerdCrypto);
    webcrypto2 = {
      // @ts-expect-error
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues,
      randomUUID,
      subtle: subtle2
    };
    crypto_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate,
      constants,
      createCipheriv,
      createDecipheriv,
      createECDH,
      createSign,
      createVerify,
      diffieHellman,
      getCipherInfo,
      hash,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      scrypt,
      scryptSync,
      sign,
      verify,
      // default-only export from unenv
      // @ts-expect-error unenv has unknown type
      createCipher,
      // @ts-expect-error unenv has unknown type
      createDecipher,
      // @ts-expect-error unenv has unknown type
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      KeyObject,
      checkPrime,
      checkPrimeSync,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hkdf,
      hkdfSync,
      pbkdf2,
      pbkdf2Sync,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      secureHeapUsed,
      setEngine,
      setFips,
      subtle: subtle2,
      timingSafeEqual,
      // default-only export from workerd
      fips,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto2();
    module.exports = crypto_default;
  }
});

// node_modules/@otplib/plugin-crypto/index.js
var require_plugin_crypto = __commonJS({
  "node_modules/@otplib/plugin-crypto/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    __name(_interopDefault, "_interopDefault");
    var crypto = _interopDefault(require_crypto());
    var createDigest = /* @__PURE__ */ __name((algorithm, hmacKey, counter) => {
      const hmac = crypto.createHmac(algorithm, Buffer.from(hmacKey, "hex"));
      const digest = hmac.update(Buffer.from(counter, "hex")).digest();
      return digest.toString("hex");
    }, "createDigest");
    var createRandomBytes = /* @__PURE__ */ __name((size, encoding) => {
      return crypto.randomBytes(size).toString(encoding);
    }, "createRandomBytes");
    exports.createDigest = createDigest;
    exports.createRandomBytes = createRandomBytes;
  }
});

// node_modules/thirty-two/lib/thirty-two/thirty-two.js
var require_thirty_two = __commonJS({
  "node_modules/thirty-two/lib/thirty-two/thirty-two.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var charTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    var byteTable = [
      255,
      255,
      26,
      27,
      28,
      29,
      30,
      31,
      255,
      255,
      255,
      255,
      255,
      255,
      255,
      255,
      255,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      255,
      255,
      255,
      255,
      255,
      255,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      255,
      255,
      255,
      255,
      255
    ];
    function quintetCount(buff) {
      var quintets = Math.floor(buff.length / 5);
      return buff.length % 5 === 0 ? quintets : quintets + 1;
    }
    __name(quintetCount, "quintetCount");
    exports.encode = function(plain) {
      if (!Buffer.isBuffer(plain)) {
        plain = new Buffer(plain);
      }
      var i = 0;
      var j = 0;
      var shiftIndex = 0;
      var digit = 0;
      var encoded = new Buffer(quintetCount(plain) * 8);
      while (i < plain.length) {
        var current = plain[i];
        if (shiftIndex > 3) {
          digit = current & 255 >> shiftIndex;
          shiftIndex = (shiftIndex + 5) % 8;
          digit = digit << shiftIndex | (i + 1 < plain.length ? plain[i + 1] : 0) >> 8 - shiftIndex;
          i++;
        } else {
          digit = current >> 8 - (shiftIndex + 5) & 31;
          shiftIndex = (shiftIndex + 5) % 8;
          if (shiftIndex === 0) i++;
        }
        encoded[j] = charTable.charCodeAt(digit);
        j++;
      }
      for (i = j; i < encoded.length; i++) {
        encoded[i] = 61;
      }
      return encoded;
    };
    exports.decode = function(encoded) {
      var shiftIndex = 0;
      var plainDigit = 0;
      var plainChar;
      var plainPos = 0;
      if (!Buffer.isBuffer(encoded)) {
        encoded = new Buffer(encoded);
      }
      var decoded = new Buffer(Math.ceil(encoded.length * 5 / 8));
      for (var i = 0; i < encoded.length; i++) {
        if (encoded[i] === 61) {
          break;
        }
        var encodedByte = encoded[i] - 48;
        if (encodedByte < byteTable.length) {
          plainDigit = byteTable[encodedByte];
          if (shiftIndex <= 3) {
            shiftIndex = (shiftIndex + 5) % 8;
            if (shiftIndex === 0) {
              plainChar |= plainDigit;
              decoded[plainPos] = plainChar;
              plainPos++;
              plainChar = 0;
            } else {
              plainChar |= 255 & plainDigit << 8 - shiftIndex;
            }
          } else {
            shiftIndex = (shiftIndex + 5) % 8;
            plainChar |= 255 & plainDigit >>> shiftIndex;
            decoded[plainPos] = plainChar;
            plainPos++;
            plainChar = 255 & plainDigit << 8 - shiftIndex;
          }
        } else {
          throw new Error("Invalid input - it is not base32 encoded string");
        }
      }
      return decoded.slice(0, plainPos);
    };
  }
});

// node_modules/thirty-two/lib/thirty-two/index.js
var require_thirty_two2 = __commonJS({
  "node_modules/thirty-two/lib/thirty-two/index.js"(exports) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var base32 = require_thirty_two();
    exports.encode = base32.encode;
    exports.decode = base32.decode;
  }
});

// node_modules/@otplib/plugin-thirty-two/index.js
var require_plugin_thirty_two = __commonJS({
  "node_modules/@otplib/plugin-thirty-two/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    __name(_interopDefault, "_interopDefault");
    var thirtyTwo = _interopDefault(require_thirty_two2());
    var keyDecoder = /* @__PURE__ */ __name((encodedSecret, encoding) => {
      return thirtyTwo.decode(encodedSecret).toString(encoding);
    }, "keyDecoder");
    var keyEncoder = /* @__PURE__ */ __name((secret, encoding) => {
      return thirtyTwo.encode(Buffer.from(secret, encoding).toString("ascii")).toString().replace(/=/g, "");
    }, "keyEncoder");
    exports.keyDecoder = keyDecoder;
    exports.keyEncoder = keyEncoder;
  }
});

// node_modules/@otplib/core/index.js
var require_core = __commonJS({
  "node_modules/@otplib/core/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    function objectValues(value) {
      return Object.keys(value).map((key) => value[key]);
    }
    __name(objectValues, "objectValues");
    (function(HashAlgorithms) {
      HashAlgorithms["SHA1"] = "sha1";
      HashAlgorithms["SHA256"] = "sha256";
      HashAlgorithms["SHA512"] = "sha512";
    })(exports.HashAlgorithms || (exports.HashAlgorithms = {}));
    var HASH_ALGORITHMS = objectValues(exports.HashAlgorithms);
    (function(KeyEncodings) {
      KeyEncodings["ASCII"] = "ascii";
      KeyEncodings["BASE64"] = "base64";
      KeyEncodings["HEX"] = "hex";
      KeyEncodings["LATIN1"] = "latin1";
      KeyEncodings["UTF8"] = "utf8";
    })(exports.KeyEncodings || (exports.KeyEncodings = {}));
    var KEY_ENCODINGS = objectValues(exports.KeyEncodings);
    (function(Strategy) {
      Strategy["HOTP"] = "hotp";
      Strategy["TOTP"] = "totp";
    })(exports.Strategy || (exports.Strategy = {}));
    var STRATEGY = objectValues(exports.Strategy);
    var createDigestPlaceholder = /* @__PURE__ */ __name(() => {
      throw new Error("Please provide an options.createDigest implementation.");
    }, "createDigestPlaceholder");
    function isTokenValid(value) {
      return /^(\d+)$/.test(value);
    }
    __name(isTokenValid, "isTokenValid");
    function padStart(value, maxLength, fillString) {
      if (value.length >= maxLength) {
        return value;
      }
      const padding = Array(maxLength + 1).join(fillString);
      return `${padding}${value}`.slice(-1 * maxLength);
    }
    __name(padStart, "padStart");
    function keyuri(options) {
      const tmpl = `otpauth://${options.type}/{labelPrefix}:{accountName}?secret={secret}{query}`;
      const params = [];
      if (STRATEGY.indexOf(options.type) < 0) {
        throw new Error(`Expecting options.type to be one of ${STRATEGY.join(", ")}. Received ${options.type}.`);
      }
      if (options.type === "hotp") {
        if (options.counter == null || typeof options.counter !== "number") {
          throw new Error('Expecting options.counter to be a number when options.type is "hotp".');
        }
        params.push(`&counter=${options.counter}`);
      }
      if (options.type === "totp" && options.step) {
        params.push(`&period=${options.step}`);
      }
      if (options.digits) {
        params.push(`&digits=${options.digits}`);
      }
      if (options.algorithm) {
        params.push(`&algorithm=${options.algorithm.toUpperCase()}`);
      }
      if (options.issuer) {
        params.push(`&issuer=${encodeURIComponent(options.issuer)}`);
      }
      return tmpl.replace("{labelPrefix}", encodeURIComponent(options.issuer || options.accountName)).replace("{accountName}", encodeURIComponent(options.accountName)).replace("{secret}", options.secret).replace("{query}", params.join(""));
    }
    __name(keyuri, "keyuri");
    var OTP = class _OTP {
      static {
        __name(this, "OTP");
      }
      constructor(defaultOptions = {}) {
        this._defaultOptions = Object.freeze({
          ...defaultOptions
        });
        this._options = Object.freeze({});
      }
      create(defaultOptions = {}) {
        return new _OTP(defaultOptions);
      }
      clone(defaultOptions = {}) {
        const instance = this.create({
          ...this._defaultOptions,
          ...defaultOptions
        });
        instance.options = this._options;
        return instance;
      }
      get options() {
        return Object.freeze({
          ...this._defaultOptions,
          ...this._options
        });
      }
      set options(options) {
        this._options = Object.freeze({
          ...this._options,
          ...options
        });
      }
      allOptions() {
        return this.options;
      }
      resetOptions() {
        this._options = Object.freeze({});
      }
    };
    function hotpOptionsValidator(options) {
      if (typeof options.createDigest !== "function") {
        throw new Error("Expecting options.createDigest to be a function.");
      }
      if (typeof options.createHmacKey !== "function") {
        throw new Error("Expecting options.createHmacKey to be a function.");
      }
      if (typeof options.digits !== "number") {
        throw new Error("Expecting options.digits to be a number.");
      }
      if (!options.algorithm || HASH_ALGORITHMS.indexOf(options.algorithm) < 0) {
        throw new Error(`Expecting options.algorithm to be one of ${HASH_ALGORITHMS.join(", ")}. Received ${options.algorithm}.`);
      }
      if (!options.encoding || KEY_ENCODINGS.indexOf(options.encoding) < 0) {
        throw new Error(`Expecting options.encoding to be one of ${KEY_ENCODINGS.join(", ")}. Received ${options.encoding}.`);
      }
    }
    __name(hotpOptionsValidator, "hotpOptionsValidator");
    var hotpCreateHmacKey = /* @__PURE__ */ __name((algorithm, secret, encoding) => {
      return Buffer.from(secret, encoding).toString("hex");
    }, "hotpCreateHmacKey");
    function hotpDefaultOptions() {
      const options = {
        algorithm: exports.HashAlgorithms.SHA1,
        createHmacKey: hotpCreateHmacKey,
        createDigest: createDigestPlaceholder,
        digits: 6,
        encoding: exports.KeyEncodings.ASCII
      };
      return options;
    }
    __name(hotpDefaultOptions, "hotpDefaultOptions");
    function hotpOptions(opt) {
      const options = {
        ...hotpDefaultOptions(),
        ...opt
      };
      hotpOptionsValidator(options);
      return Object.freeze(options);
    }
    __name(hotpOptions, "hotpOptions");
    function hotpCounter(counter) {
      const hexCounter = counter.toString(16);
      return padStart(hexCounter, 16, "0");
    }
    __name(hotpCounter, "hotpCounter");
    function hotpDigestToToken(hexDigest, digits) {
      const digest = Buffer.from(hexDigest, "hex");
      const offset = digest[digest.length - 1] & 15;
      const binary = (digest[offset] & 127) << 24 | (digest[offset + 1] & 255) << 16 | (digest[offset + 2] & 255) << 8 | digest[offset + 3] & 255;
      const token = binary % Math.pow(10, digits);
      return padStart(String(token), digits, "0");
    }
    __name(hotpDigestToToken, "hotpDigestToToken");
    function hotpDigest(secret, counter, options) {
      const hexCounter = hotpCounter(counter);
      const hmacKey = options.createHmacKey(options.algorithm, secret, options.encoding);
      return options.createDigest(options.algorithm, hmacKey, hexCounter);
    }
    __name(hotpDigest, "hotpDigest");
    function hotpToken(secret, counter, options) {
      const hexDigest = options.digest || hotpDigest(secret, counter, options);
      return hotpDigestToToken(hexDigest, options.digits);
    }
    __name(hotpToken, "hotpToken");
    function hotpCheck(token, secret, counter, options) {
      if (!isTokenValid(token)) {
        return false;
      }
      const systemToken = hotpToken(secret, counter, options);
      return token === systemToken;
    }
    __name(hotpCheck, "hotpCheck");
    function hotpKeyuri(accountName, issuer, secret, counter, options) {
      return keyuri({
        algorithm: options.algorithm,
        digits: options.digits,
        type: exports.Strategy.HOTP,
        accountName,
        counter,
        issuer,
        secret
      });
    }
    __name(hotpKeyuri, "hotpKeyuri");
    var HOTP = class _HOTP extends OTP {
      static {
        __name(this, "HOTP");
      }
      create(defaultOptions = {}) {
        return new _HOTP(defaultOptions);
      }
      allOptions() {
        return hotpOptions(this.options);
      }
      generate(secret, counter) {
        return hotpToken(secret, counter, this.allOptions());
      }
      check(token, secret, counter) {
        return hotpCheck(token, secret, counter, this.allOptions());
      }
      verify(opts) {
        if (typeof opts !== "object") {
          throw new Error("Expecting argument 0 of verify to be an object");
        }
        return this.check(opts.token, opts.secret, opts.counter);
      }
      keyuri(accountName, issuer, secret, counter) {
        return hotpKeyuri(accountName, issuer, secret, counter, this.allOptions());
      }
    };
    function parseWindowBounds(win) {
      if (typeof win === "number") {
        return [Math.abs(win), Math.abs(win)];
      }
      if (Array.isArray(win)) {
        const [past, future] = win;
        if (typeof past === "number" && typeof future === "number") {
          return [Math.abs(past), Math.abs(future)];
        }
      }
      throw new Error("Expecting options.window to be an number or [number, number].");
    }
    __name(parseWindowBounds, "parseWindowBounds");
    function totpOptionsValidator(options) {
      hotpOptionsValidator(options);
      parseWindowBounds(options.window);
      if (typeof options.epoch !== "number") {
        throw new Error("Expecting options.epoch to be a number.");
      }
      if (typeof options.step !== "number") {
        throw new Error("Expecting options.step to be a number.");
      }
    }
    __name(totpOptionsValidator, "totpOptionsValidator");
    var totpPadSecret = /* @__PURE__ */ __name((secret, encoding, minLength) => {
      const currentLength = secret.length;
      const hexSecret = Buffer.from(secret, encoding).toString("hex");
      if (currentLength < minLength) {
        const newSecret = new Array(minLength - currentLength + 1).join(hexSecret);
        return Buffer.from(newSecret, "hex").slice(0, minLength).toString("hex");
      }
      return hexSecret;
    }, "totpPadSecret");
    var totpCreateHmacKey = /* @__PURE__ */ __name((algorithm, secret, encoding) => {
      switch (algorithm) {
        case exports.HashAlgorithms.SHA1:
          return totpPadSecret(secret, encoding, 20);
        case exports.HashAlgorithms.SHA256:
          return totpPadSecret(secret, encoding, 32);
        case exports.HashAlgorithms.SHA512:
          return totpPadSecret(secret, encoding, 64);
        default:
          throw new Error(`Expecting algorithm to be one of ${HASH_ALGORITHMS.join(", ")}. Received ${algorithm}.`);
      }
    }, "totpCreateHmacKey");
    function totpDefaultOptions() {
      const options = {
        algorithm: exports.HashAlgorithms.SHA1,
        createDigest: createDigestPlaceholder,
        createHmacKey: totpCreateHmacKey,
        digits: 6,
        encoding: exports.KeyEncodings.ASCII,
        epoch: Date.now(),
        step: 30,
        window: 0
      };
      return options;
    }
    __name(totpDefaultOptions, "totpDefaultOptions");
    function totpOptions(opt) {
      const options = {
        ...totpDefaultOptions(),
        ...opt
      };
      totpOptionsValidator(options);
      return Object.freeze(options);
    }
    __name(totpOptions, "totpOptions");
    function totpCounter(epoch, step) {
      return Math.floor(epoch / step / 1e3);
    }
    __name(totpCounter, "totpCounter");
    function totpToken(secret, options) {
      const counter = totpCounter(options.epoch, options.step);
      return hotpToken(secret, counter, options);
    }
    __name(totpToken, "totpToken");
    function totpEpochsInWindow(epoch, direction, deltaPerEpoch, numOfEpoches) {
      const result = [];
      if (numOfEpoches === 0) {
        return result;
      }
      for (let i = 1; i <= numOfEpoches; i++) {
        const delta = direction * i * deltaPerEpoch;
        result.push(epoch + delta);
      }
      return result;
    }
    __name(totpEpochsInWindow, "totpEpochsInWindow");
    function totpEpochAvailable(epoch, step, win) {
      const bounds = parseWindowBounds(win);
      const delta = step * 1e3;
      return {
        current: epoch,
        past: totpEpochsInWindow(epoch, -1, delta, bounds[0]),
        future: totpEpochsInWindow(epoch, 1, delta, bounds[1])
      };
    }
    __name(totpEpochAvailable, "totpEpochAvailable");
    function totpCheck(token, secret, options) {
      if (!isTokenValid(token)) {
        return false;
      }
      const systemToken = totpToken(secret, options);
      return token === systemToken;
    }
    __name(totpCheck, "totpCheck");
    function totpCheckByEpoch(epochs, token, secret, options) {
      let position = null;
      epochs.some((epoch, idx) => {
        if (totpCheck(token, secret, {
          ...options,
          epoch
        })) {
          position = idx + 1;
          return true;
        }
        return false;
      });
      return position;
    }
    __name(totpCheckByEpoch, "totpCheckByEpoch");
    function totpCheckWithWindow(token, secret, options) {
      if (totpCheck(token, secret, options)) {
        return 0;
      }
      const epochs = totpEpochAvailable(options.epoch, options.step, options.window);
      const backward = totpCheckByEpoch(epochs.past, token, secret, options);
      if (backward !== null) {
        return backward * -1;
      }
      return totpCheckByEpoch(epochs.future, token, secret, options);
    }
    __name(totpCheckWithWindow, "totpCheckWithWindow");
    function totpTimeUsed(epoch, step) {
      return Math.floor(epoch / 1e3) % step;
    }
    __name(totpTimeUsed, "totpTimeUsed");
    function totpTimeRemaining(epoch, step) {
      return step - totpTimeUsed(epoch, step);
    }
    __name(totpTimeRemaining, "totpTimeRemaining");
    function totpKeyuri(accountName, issuer, secret, options) {
      return keyuri({
        algorithm: options.algorithm,
        digits: options.digits,
        step: options.step,
        type: exports.Strategy.TOTP,
        accountName,
        issuer,
        secret
      });
    }
    __name(totpKeyuri, "totpKeyuri");
    var TOTP = class _TOTP extends HOTP {
      static {
        __name(this, "TOTP");
      }
      create(defaultOptions = {}) {
        return new _TOTP(defaultOptions);
      }
      allOptions() {
        return totpOptions(this.options);
      }
      generate(secret) {
        return totpToken(secret, this.allOptions());
      }
      checkDelta(token, secret) {
        return totpCheckWithWindow(token, secret, this.allOptions());
      }
      check(token, secret) {
        const delta = this.checkDelta(token, secret);
        return typeof delta === "number";
      }
      verify(opts) {
        if (typeof opts !== "object") {
          throw new Error("Expecting argument 0 of verify to be an object");
        }
        return this.check(opts.token, opts.secret);
      }
      timeRemaining() {
        const options = this.allOptions();
        return totpTimeRemaining(options.epoch, options.step);
      }
      timeUsed() {
        const options = this.allOptions();
        return totpTimeUsed(options.epoch, options.step);
      }
      keyuri(accountName, issuer, secret) {
        return totpKeyuri(accountName, issuer, secret, this.allOptions());
      }
    };
    function authenticatorOptionValidator(options) {
      totpOptionsValidator(options);
      if (typeof options.keyDecoder !== "function") {
        throw new Error("Expecting options.keyDecoder to be a function.");
      }
      if (options.keyEncoder && typeof options.keyEncoder !== "function") {
        throw new Error("Expecting options.keyEncoder to be a function.");
      }
    }
    __name(authenticatorOptionValidator, "authenticatorOptionValidator");
    function authenticatorDefaultOptions() {
      const options = {
        algorithm: exports.HashAlgorithms.SHA1,
        createDigest: createDigestPlaceholder,
        createHmacKey: totpCreateHmacKey,
        digits: 6,
        encoding: exports.KeyEncodings.HEX,
        epoch: Date.now(),
        step: 30,
        window: 0
      };
      return options;
    }
    __name(authenticatorDefaultOptions, "authenticatorDefaultOptions");
    function authenticatorOptions(opt) {
      const options = {
        ...authenticatorDefaultOptions(),
        ...opt
      };
      authenticatorOptionValidator(options);
      return Object.freeze(options);
    }
    __name(authenticatorOptions, "authenticatorOptions");
    function authenticatorEncoder(secret, options) {
      return options.keyEncoder(secret, options.encoding);
    }
    __name(authenticatorEncoder, "authenticatorEncoder");
    function authenticatorDecoder(secret, options) {
      return options.keyDecoder(secret, options.encoding);
    }
    __name(authenticatorDecoder, "authenticatorDecoder");
    function authenticatorGenerateSecret(numberOfBytes, options) {
      const key = options.createRandomBytes(numberOfBytes, options.encoding);
      return authenticatorEncoder(key, options);
    }
    __name(authenticatorGenerateSecret, "authenticatorGenerateSecret");
    function authenticatorToken(secret, options) {
      return totpToken(authenticatorDecoder(secret, options), options);
    }
    __name(authenticatorToken, "authenticatorToken");
    function authenticatorCheckWithWindow(token, secret, options) {
      return totpCheckWithWindow(token, authenticatorDecoder(secret, options), options);
    }
    __name(authenticatorCheckWithWindow, "authenticatorCheckWithWindow");
    var Authenticator = class _Authenticator extends TOTP {
      static {
        __name(this, "Authenticator");
      }
      create(defaultOptions = {}) {
        return new _Authenticator(defaultOptions);
      }
      allOptions() {
        return authenticatorOptions(this.options);
      }
      generate(secret) {
        return authenticatorToken(secret, this.allOptions());
      }
      checkDelta(token, secret) {
        return authenticatorCheckWithWindow(token, secret, this.allOptions());
      }
      encode(secret) {
        return authenticatorEncoder(secret, this.allOptions());
      }
      decode(secret) {
        return authenticatorDecoder(secret, this.allOptions());
      }
      generateSecret(numberOfBytes = 10) {
        return authenticatorGenerateSecret(numberOfBytes, this.allOptions());
      }
    };
    exports.Authenticator = Authenticator;
    exports.HASH_ALGORITHMS = HASH_ALGORITHMS;
    exports.HOTP = HOTP;
    exports.KEY_ENCODINGS = KEY_ENCODINGS;
    exports.OTP = OTP;
    exports.STRATEGY = STRATEGY;
    exports.TOTP = TOTP;
    exports.authenticatorCheckWithWindow = authenticatorCheckWithWindow;
    exports.authenticatorDecoder = authenticatorDecoder;
    exports.authenticatorDefaultOptions = authenticatorDefaultOptions;
    exports.authenticatorEncoder = authenticatorEncoder;
    exports.authenticatorGenerateSecret = authenticatorGenerateSecret;
    exports.authenticatorOptionValidator = authenticatorOptionValidator;
    exports.authenticatorOptions = authenticatorOptions;
    exports.authenticatorToken = authenticatorToken;
    exports.createDigestPlaceholder = createDigestPlaceholder;
    exports.hotpCheck = hotpCheck;
    exports.hotpCounter = hotpCounter;
    exports.hotpCreateHmacKey = hotpCreateHmacKey;
    exports.hotpDefaultOptions = hotpDefaultOptions;
    exports.hotpDigestToToken = hotpDigestToToken;
    exports.hotpKeyuri = hotpKeyuri;
    exports.hotpOptions = hotpOptions;
    exports.hotpOptionsValidator = hotpOptionsValidator;
    exports.hotpToken = hotpToken;
    exports.isTokenValid = isTokenValid;
    exports.keyuri = keyuri;
    exports.objectValues = objectValues;
    exports.padStart = padStart;
    exports.totpCheck = totpCheck;
    exports.totpCheckByEpoch = totpCheckByEpoch;
    exports.totpCheckWithWindow = totpCheckWithWindow;
    exports.totpCounter = totpCounter;
    exports.totpCreateHmacKey = totpCreateHmacKey;
    exports.totpDefaultOptions = totpDefaultOptions;
    exports.totpEpochAvailable = totpEpochAvailable;
    exports.totpKeyuri = totpKeyuri;
    exports.totpOptions = totpOptions;
    exports.totpOptionsValidator = totpOptionsValidator;
    exports.totpPadSecret = totpPadSecret;
    exports.totpTimeRemaining = totpTimeRemaining;
    exports.totpTimeUsed = totpTimeUsed;
    exports.totpToken = totpToken;
  }
});

// node_modules/@otplib/preset-default/index.js
var require_preset_default = __commonJS({
  "node_modules/@otplib/preset-default/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var pluginCrypto = require_plugin_crypto();
    var pluginThirtyTwo = require_plugin_thirty_two();
    var core = require_core();
    var hotp = new core.HOTP({
      createDigest: pluginCrypto.createDigest
    });
    var totp = new core.TOTP({
      createDigest: pluginCrypto.createDigest
    });
    var authenticator2 = new core.Authenticator({
      createDigest: pluginCrypto.createDigest,
      createRandomBytes: pluginCrypto.createRandomBytes,
      keyDecoder: pluginThirtyTwo.keyDecoder,
      keyEncoder: pluginThirtyTwo.keyEncoder
    });
    exports.authenticator = authenticator2;
    exports.hotp = hotp;
    exports.totp = totp;
  }
});

// node_modules/otplib/index.js
var require_otplib = __commonJS({
  "node_modules/otplib/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var presetDefault = require_preset_default();
    Object.keys(presetDefault).forEach(function(k) {
      if (k !== "default") Object.defineProperty(exports, k, {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return presetDefault[k];
        }, "get")
      });
    });
  }
});

// .wrangler/tmp/bundle-jFM6sy/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-jFM6sy/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_otplib = __toESM(require_otplib());
var src_default = {
  async fetch(request, env2, ctx) {
    const url = new URL(request.url);
    const secret = url.searchParams.get("secret");
    const digits = parseInt(url.searchParams.get("digits") || "6");
    if (!secret) {
      return new Response(JSON.stringify({ error: "Missing 'secret' query param" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const cleanSecret = secret.replace(/[\s\-]/g, "").toUpperCase();
      import_otplib.authenticator.options = {
        digits,
        step: 30,
        // 30 second window (Google Authenticator default)
        window: 1
        // Allow 1 window of tolerance
      };
      const token = import_otplib.authenticator.generate(cleanSecret);
      return new Response(JSON.stringify({
        token
      }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(JSON.stringify({
        error: err.message
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-jFM6sy/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-jFM6sy/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@otplib/plugin-crypto/index.js:
  (**
   * @otplib/plugin-crypto
   *
   * @author Gerald Yeo <contact@fusedthought.com>
   * @version: 12.0.1
   * @license: MIT
   **)

@otplib/plugin-thirty-two/index.js:
  (**
   * @otplib/plugin-thirty-two
   *
   * @author Gerald Yeo <contact@fusedthought.com>
   * @version: 12.0.1
   * @license: MIT
   **)

@otplib/core/index.js:
  (**
   * @otplib/core
   *
   * @author Gerald Yeo <contact@fusedthought.com>
   * @version: 12.0.1
   * @license: MIT
   **)

@otplib/preset-default/index.js:
  (**
   * @otplib/preset-default
   *
   * @author Gerald Yeo <contact@fusedthought.com>
   * @version: 12.0.1
   * @license: MIT
   **)

otplib/index.js:
  (**
   * otplib
   *
   * @author Gerald Yeo <contact@fusedthought.com>
   * @version: 12.0.1
   * @license: MIT
   **)
*/
//# sourceMappingURL=index.js.map
