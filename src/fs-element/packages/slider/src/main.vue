<template>
  <div class="el-slider"
    :class="{ 'is-vertical': vertical, 'el-slider--with-input': showInput }">
    <el-input-number
      v-model="firstValue"
      v-if="showInput && !range"
      class="el-slider__input"
      ref="input"
      :step="step"
      :disabled="disabled"
      :controls="showInputControls"
      :min="min"
      :max="max"
      size="small">
    </el-input-number>
    <div class="el-slider__runway"
      :class="{ 'show-input': showInput, 'disabled': disabled }"
      :style="runwayStyle"
      @click="onSliderClick"
      ref="slider">
      <div
        class="el-slider__bar"
        :style="barStyle">
      </div>
      <slider-button
        :vertical="vertical"
        v-model="firstValue"
        ref="button1">
      </slider-button>
      <slider-button
        :vertical="vertical"
        v-model="secondValue"
        ref="button2"
        v-if="range">
      </slider-button>
      <div
        class="el-slider__stop"
        v-for="item in stops"
        :style="vertical ? { 'bottom': item + '%' } : { 'left': item + '%' }"
        v-if="showStops">
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import ElInputNumber from 'ifbp-element/packages/input-number';
  import SliderButton from './button.vue';
  import { getStyle } from 'ifbp-element/src/utils/dom';
  import Emitter from 'ifbp-element/src/mixins/emitter';

  export default {
    name: 'ElSlider',

    mixins: [Emitter],

    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: [Number, Array],
        default: 0
      },
      showInput: {
        type: Boolean,
        default: false
      },
      showInputControls: {
        type: Boolean,
        default: true
      },
      showStops: {
        type: Boolean,
        default: false
      },
      showTooltip: {
        type: Boolean,
        default: true
      },
      formatTooltip: Function,
      disabled: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      height: {
        type: String
      }
    },

    components: {
      ElInputNumber,
      SliderButton
    },

    data() {
      return {
        firstValue: null,
        secondValue: null,
        oldValue: null,
        dragging: false
      };
    },

    watch: {
      value(val, oldVal) {
        if (this.dragging ||
          Array.isArray(val) &&
          Array.isArray(oldVal) &&
          val.every((item, index) => item === oldVal[index])) {
          return;
        }
        this.setValues();
      },

      dragging(val) {
        if (!val) {
          this.setValues();
        }
      },

      firstValue(val) {
        if (this.range) {
          this.$emit('input', [this.minValue, this.maxValue]);
        } else {
          this.$emit('input', val);
        }
      },

      secondValue() {
        if (this.range) {
          this.$emit('input', [this.minValue, this.maxValue]);
        }
      },

      min() {
        this.setValues();
      },

      max() {
        this.setValues();
      }
    },

    methods: {
      valueChanged() {
        if (this.range) {
          return ![this.minValue, this.maxValue]
            .every((item, index) => item === this.oldValue[index]);
        } else {
          return this.value !== this.oldValue;
        }
      },
      setValues() {
        const val = this.value;
        if (this.range && Array.isArray(val)) {
          if (val[1] < this.min) {
            this.$emit('input', [this.min, this.min]);
          } else if (val[0] > this.max) {
            this.$emit('input', [this.max, this.max]);
          } else if (val[0] < this.min) {
            this.$emit('input', [this.min, val[1]]);
          } else if (val[1] > this.max) {
            this.$emit('input', [val[0], this.max]);
          } else {
            this.firstValue = val[0];
            this.secondValue = val[1];
            if (this.valueChanged()) {
              this.$emit('change', [this.minValue, this.maxValue]);
              this.dispatch('ElFormItem', 'el.form.change', [this.minValue, this.maxValue]);
              this.oldValue = val.slice();
            }
          }
        } else if (!this.range && typeof val === 'number' && !isNaN(val)) {
          if (val < this.min) {
            this.$emit('input', this.min);
          } else if (val > this.max) {
            this.$emit('input', this.max);
          } else {
            this.firstValue = val;
            if (this.valueChanged()) {
              this.$emit('change', val);
              this.dispatch('ElFormItem', 'el.form.change', val);
              this.oldValue = val;
            }
          }
        }
      },

      setPosition(percent) {
        const targetValue = this.min + percent * (this.max - this.min) / 100;
        if (!this.range) {
          this.$refs.button1.setPosition(percent);
          return;
        }
        let button;
        if (Math.abs(this.minValue - targetValue) < Math.abs(this.maxValue - targetValue)) {
          button = this.firstValue < this.secondValue ? 'button1' : 'button2';
        } else {
          button = this.firstValue > this.secondValue ? 'button1' : 'button2';
        }
        this.$refs[button].setPosition(percent);
      },

      onSliderClick(event) {
        if (this.disabled || this.dragging) return;
        if (this.vertical) {
          const sliderOffsetBottom = this.$refs.slider.getBoundingClientRect().bottom;
          this.setPosition((sliderOffsetBottom - event.clientY) / this.$sliderSize * 100);
        } else {
          const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
          this.setPosition((event.clientX - sliderOffsetLeft) / this.$sliderSize * 100);
        }
      }
    },

    computed: {
      $sliderSize() {
        return parseInt(getStyle(this.$refs.slider, (this.vertical ? 'height' : 'width')), 10);
      },

      stops() {
        const stopCount = (this.max - this.min) / this.step;
        const stepWidth = 100 * this.step / (this.max - this.min);
        const result = [];
        for (let i = 1; i < stopCount; i++) {
          result.push(i * stepWidth);
        }
        if (this.range) {
          return result.filter(step => {
            return step < 100 * (this.minValue - this.min) / (this.max - this.min) ||
              step > 100 * (this.maxValue - this.min) / (this.max - this.min);
          });
        } else {
          return result.filter(step => step > 100 * (this.firstValue - this.min) / (this.max - this.min));
        }
      },

      minValue() {
        return Math.min(this.firstValue, this.secondValue);
      },

      maxValue() {
        return Math.max(this.firstValue, this.secondValue);
      },

      barSize() {
        return this.range
          ? `${ 100 * (this.maxValue - this.minValue) / (this.max - this.min) }%`
          : `${ 100 * (this.firstValue - this.min) / (this.max - this.min) }%`;
      },

      barStart() {
        return this.range
          ? `${ 100 * (this.minValue - this.min) / (this.max - this.min) }%`
          : '0%';
      },

      precision() {
        let precisions = [this.min, this.max, this.step].map(item => {
          let decimal = ('' + item).split('.')[1];
          return decimal ? decimal.length : 0;
        });
        return Math.max.apply(null, precisions);
      },

      runwayStyle() {
        return this.vertical ? { height: this.height } : {};
      },

      barStyle() {
        return this.vertical
          ? {
            height: this.barSize,
            bottom: this.barStart
          } : {
            width: this.barSize,
            left: this.barStart
          };
      }
    },

    mounted() {
      if (this.range) {
        if (Array.isArray(this.value)) {
          this.firstValue = Math.max(this.min, this.value[0]);
          this.secondValue = Math.min(this.max, this.value[1]);
        } else {
          this.firstValue = this.min;
          this.secondValue = this.max;
        }
        this.oldValue = [this.firstValue, this.secondValue];
      } else {
        if (typeof this.value !== 'number' || isNaN(this.value)) {
          this.firstValue = this.min;
        } else {
          this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
        }
        this.oldValue = this.firstValue;
      }
    }
  };
</script>
