import { shallowMount, mount } from "@vue/test-utils";
import VideoList from "@/components/VideoList";

describe("VideoList.vue", () => {
  it("emits videoObjectToApp event on passVideoObjectUp method call", () => {
    let wrapper = shallowMount(VideoList);
    wrapper.vm.passVideoObjectUp("test video");
    expect(wrapper.emitted().videoObjectToApp[0][0]).toEqual("test video");
  });
});
