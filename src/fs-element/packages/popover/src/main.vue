<template>
  <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div
        class="el-popover"
        :class="[popperClass]"
        ref="popper"
        v-show="!disabled && showPopper"
        :style="{ width: width + 'px' }">
        <div class="ifbp-tips-close" v-if="ifbpPopoverClose">
          <i class="ifbp-icon-close" @click="popoverClose" ></i>
        </div>
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
import Popper from 'ifbp-element/src/utils/vue-popper';
import { on, off } from 'ifbp-element/src/utils/dom';

export default {
  name: 'ElPopover',

  mixins: [Popper],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass:[Array,String],
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    ifbpPopoverClose: false

  },

  watch: {
    showPopper(newVal, oldVal) {
      newVal ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted() {
    let reference = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    if (this.trigger === 'click') {
      on(reference, 'click', this.doToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popper, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      let found = false;

      if ([].slice.call(reference.children).length) {
        const children = reference.childNodes;
        const len = children.length;
        for (let i = 0; i < len; i++) {
          if (children[i].nodeName === 'INPUT' ||
              children[i].nodeName === 'TEXTAREA') {
            on(children[i], 'focus', this.doShow);
            on(children[i], 'blur', this.doClose);
            found = true;
            break;
          }
        }
      }
      if (found) return;
      if (reference.nodeName === 'INPUT' ||
        reference.nodeName === 'TEXTAREA') {
        on(reference, 'focus', this.doShow);
        on(reference, 'blur', this.doClose);
      } else {
        on(reference, 'mousedown', this.doShow);
        on(reference, 'mouseup', this.doClose);
      }
    }
  },

  methods: {
    popoverClose() {
      this.showPopper = false;
      this.$emit('ifbp-popover-close', this.showPopper);
    },
    doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showPopper = false;
    },
    handleMouseEnter() {
      this.showPopper = true;
      clearTimeout(this._timer);
    },
    handleMouseLeave() {
      this._timer = setTimeout(() => {
        this.showPopper = false;
      }, 200);
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return;
      this.showPopper = false;
    }
  },

  destroyed() {
    const reference = this.reference;

    off(reference, 'click', this.doToggle);
    off(reference, 'mouseup', this.doClose);
    off(reference, 'mousedown', this.doShow);
    off(reference, 'focus', this.doShow);
    off(reference, 'blur', this.doClose);
    off(reference, 'mouseleave', this.handleMouseLeave);
    off(reference, 'mouseenter', this.handleMouseEnter);
    off(document, 'click', this.handleDocumentClick);
  }
};
</script>
