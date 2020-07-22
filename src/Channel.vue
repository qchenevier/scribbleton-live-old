<template lang="html">
  <div class="column">
    <button @click="$emit('close', id)">Close</button>
    <button @click="() => addEffect()">Add effect</button>
    <input type="checkbox" id="checkbox" v-model="input.offlineRendering" />
    <label for="checkbox">Pre-render: {{ input.offlineRendering }}</label>
    <Clip :key="`clip-${id}`" v-model="input.clips" />
    <Instrument
      :key="`instrument-${id}`"
      :names="instrumentNames"
      v-model="input.instrument"
    />
    <Instrument
      v-for="(effect, idEffect) in input.effects"
      :key="`effect-${idEffect}`"
      :names="effectNames"
      v-model="input.effects[idEffect]"
      :closeButton="true"
      @close="removeEffect"
      height="100px"
    />
  </div>
</template>

<script>
import Instrument from "./Instrument.vue";
import Clip from "./Clip.vue";

function randomHash() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
}

export default {
  components: { Instrument, Clip },
  props: {
    value: {
      default() {
        return {
          clips: undefined,
          instrument: undefined,
          effects: {},
          offlineRendering: false
        };
      }
    }
  },
  data() {
    return {
      input: this.value,
      instrumentNames: [
        "AMSynth",
        "DuoSynth",
        "FMSynth",
        "MembraneSynth",
        "MetalSynth",
        "MonoSynth",
        "NoiseSynth",
        "PluckSynth",
        "Sampler",
        "Synth"
      ],
      effectNames: [
        "AutoFilter",
        "AutoPanner",
        "AutoWah",
        "BitCrusher",
        "Chebyshev",
        "Chorus",
        "Distortion",
        "FeedbackDelay",
        "Freeverb",
        "FrequencyShifter",
        "JCReverb",
        "Phaser",
        "PingPongDelay",
        "PitchShift",
        "Reverb",
        "StereoWidener",
        "Tremolo",
        "Vibrato"
      ]
    };
  },
  computed: {
    id() {
      return this.$vnode.key.split("-")[1];
    }
  },
  methods: {
    addEffect(effect) {
      let id = randomHash();
      this.$set(this.input.effects, id, effect);
    },
    removeEffect(id) {
      this.$delete(this.input.effects, id);
    }
  },
  watch: {
    input: {
      deep: true,
      handler() {
        this.$emit("input", this.input);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.column {
  float: left;
  width: 355;
}
</style>