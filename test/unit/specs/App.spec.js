import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App";
import axios from "axios";
jest.mock("axios");

describe("App.vue", () => {
  beforeEach(() => {
    let wrapper = mount(App);
  });
  const wrapper = mount(App);
  it("should mount App with data props", () => {
    expect(wrapper.vm.videos).toMatchSnapshot();
    expect(wrapper.vm.selectedVideo).toMatchSnapshot();
  });

  it("should set videos state to axios array response when onTermChange is called", async () => {
    let wrapper = shallowMount(App);
    const res = {
      data: {
        items: ["video1", "video2", "video3", "video4", "video5"]
      }
    };
    axios.get.mockResolvedValue(res);
    await wrapper.vm.onTermChange("video search term");

    expect(wrapper.vm.videos).toEqual(res.data.items);
  });
  it("should render html with all child components", () => {
    expect(wrapper.find("[data-test='app']").text()).toMatchSnapshot();
    expect(wrapper.vm.$children[0].$options._componentTag).toEqual("SearchBar");
    expect(wrapper.vm.$children[1].$options._componentTag).toEqual("VideoList");
    expect(wrapper.vm.$children[2].$options._componentTag).toEqual(
      "VideoDetail"
    );
  });
});
