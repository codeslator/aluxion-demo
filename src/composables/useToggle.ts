import { ref } from 'vue';

const useToggle = () => {
  const isActive = ref(false);

  const toggleActive = () => {
    isActive.value = !isActive.value;
  }

  return {
    isActive,
    toggleActive,
  };
};

export default useToggle;