<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled }
    ]"
  >
    <input
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      :disabled="isDisabled">
    <span class="el-radio-button__inner" :style="value === label ? activeStyle : null">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'ElRadioButton',
    data(){
    	return{
    		TimeOut:null
    	}
    },
    props: {
      label: {},
      disabled: Boolean,
      name: String
    },
    watch:{
    		value: {
        immediate: true,
        handler(value) {
          if(this.TimeOut){
            clearTimeout(this.TimeOut);
          }
          this.TimeOut = setTimeout(()=>{
            this.$emit('valuechange',value);
            this.TimeOut = null;
            clearTimeout(this.TimeOut);
          },200);         
        }
	    }      
    },
    computed: {
      value: {
        get() {
          return this._radioGroup.value;
        },
        set(value) {
          this._radioGroup.$emit('input', value);
        }
      },
      _radioGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      activeStyle() {
        return {
          backgroundColor: this._radioGroup.fill || '',
          borderColor: this._radioGroup.fill || '',
          boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
          color: this._radioGroup.textColor || ''
        };
      },
      size() {
        return this._radioGroup.size;
      },
      isDisabled() {
        return this.disabled || this._radioGroup.disabled;
      }
    }
  };
</script>
