import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const DesignPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col sm:gap-10 md:gap-10 gap-[217px] items-start justify-start mx-auto  w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1300px] h-[1318px] sm:h-[1478px] md:px-5 relative w-full">
            <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-36 inset-x-[0] items-center justify-start mx-auto p-[19px] top-[0] w-full">
              <header className="flex md:flex-col flex-row font-myanmarkhyay md:gap-5 items-center justify-center w-full">
                <div className="h-[50px] relative w-[17%] md:w-full">
                  <Img
                    className="absolute h-[47px] inset-y-[0] left-[0] my-auto object-cover w-12"
                    src="images/img_mwrbsjrk7ityxel7mkvpzrq3g.png"
                    alt="mwrbsjrk7ityxel"
                  />
                  <div className="absolute block flex-row font-myanmarkhyay font-semibold h-full inset-y-[0] items-center justify-start ml-[50px] my-auto right-[0] text-left">
                    <Text
                      className="block items-center justify-end sm:ml-[] mt-2.5 md:relative sm:right-[250px] md:right-[720px] sm:text-[19px] md:text-[21px] text-black-900 text-lg w-auto"
                      size="txtMyanmarKhyay23"
                    >
                      Manage Wise
                    </Text>
                  </div>
                </div>
                <ul className="md:bottom-[60px] flex md:flex-1 flex-row font-inter sm:hidden items-start justify-center md:left-[120px] mb-2 md:ml-[0] ml-[599px] md:mt-0 mt-5 md:relative w-[27%] md:w-full common-row-list">
                  <li>
                    <a href="javascript:" className="text-base text-black-900">
                      <Text size="txtInterMedium16">Features</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="bg-blue_gray-100 h-1 ml-3 my-2 rounded-[50%] w-1"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[18px] text-base text-black-900"
                    >
                      <Text size="txtInterMedium16">FAQ</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="bg-blue_gray-100 h-1 ml-[17px] my-2 rounded-[50%] w-1"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[21px] text-base text-black-900"
                    >
                      <Text size="txtInterMedium16">Pricing</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="bg-blue_gray-100 h-1 ml-[17px] my-2 rounded-[50%] w-1"></div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[18px] text-base text-black-900"
                    >
                      <Text size="txtInterMedium16">Testimonials</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:ml-[0] ml-[62px] md:mt-0 mt-2.5 w-[10%] md:w-full">
                  <Button
                    className="md:bg-colors md:bottom-28 cursor-pointer font-medium leading-[normal] md:left-[400px] min-w-[125px] sm:opacity-0 md:p-[5px] md:relative rounded-[10px] text-base text-center"
                    size="xs"
                  >
                    Buy Template
                  </Button>
                </div>
              </header>
              <Input
                name="language"
                placeholder="👋   WELCOME TO MANAGE WISE !"
                className="!text-black font-montserrat font-semibold leading-[normal] md:h-auto p-0 placeholder:text-deep_purple-A200 sm:h-auto sm:w-[70%] text-[11px] text-left w-full"
                wrapClassName="!bg-colors border border-gray-500 border-solid bottom-[30px] p-1 relative rounded-lg text-black w-[23%] sm:w-[70%]"
              ></Input>
              <div className="flex flex-col items-center justify-start mb-[654px] w-[71%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="bottom-[130px] sm:bottom-[] md:bottom-[] leading-[90.00px] relative md:text-5xl text-[55px] text-center text-gray-900 md:top-px w-full"
                      size="txtMontserratSemiBold65"
                    >
                      <span className="text-gray-900 font-montserrat text-left font-semibold">
                        <>
                          Empower your business with
                          <br />{" "}
                        </>
                      </span>
                      <span className="text-deep_orange-300 font-montserrat text-left font-semibold">
                        Strategic
                      </span>
                      <span className="text-gray-900 font-montserrat text-left font-semibold">
                        {" "}
                        insights
                      </span>
                    </Text>
                    <Text
                      className="bottom-[120px] sm:bottom-[] md:bottom-[] leading-[30.00px] sm:leading-[40px] relative text-[19px] text-center text-gray-600 sm:text-xl md:top-2.5 sm:top-3 w-[68%] sm:w-full"
                      size="txtInterMedium19"
                    >
                      Powerful management platform designed to streamline your
                      business operations, boost productivity, and drive success
                    </Text>
                    <div className="bottom-[120px] md:bottom-[] flex sm:flex-col flex-row font-montserrat gap-7 items-center justify-center mt-[41px] relative md:top-2.5 w-[46%] md:w-full">
                      <Button
                        className="!rounded-[10px] !text-colors bg-deep_purple-A200 cursor-pointer font-bold h-[51px] leading-[normal] sm:relative text-center text-xl sm:top-[40px] w-[211px]"
                        shape="round"
                        color="deep_purple_A200"
                      >
                        Get Started
                      </Button>
                      <Button
                        className="!bg-colors !rounded-[10px] border border-gray-500 border-solid cursor-pointer flex h-[51px] items-center justify-center sm:relative sm:top-[50px] w-[211px]"
                        rightIcon={
                          <div className="h-4 ml-3 w-4 bg-black-900 my-1">
                            <Img
                              className="h-4"
                              src="images/img_vector.svg"
                              alt="Vector"
                            />
                          </div>
                        }
                        shape="round"
                      >
                        <div className="font-semibold text-gray-900 leading-[normal] sm:relative sm:top-[0px] text-left text-xl">
                          Watch Demo
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[5px] inset-x-[0] mx-auto top-[6%] w-full">
              <Line className="bg-red-100 h-px m-auto w-full" />
              <Line className="absolute bg-red-100 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <Img
              className="absolute bottom-[0] h-[658px] inset-x-[0] mx-auto object-cover w-[88%]"
              src="images/img_image7.png"
              alt="imageSeven"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-start pl-[13px] pt-[13px] md:px-5 w-[96%] md:w-full">
          <div className="flex flex-col justify-start w-[97%] md:w-full">
            <div className="flex flex-col font-montserrat items-center justify-start md:ml-[0] ml-[516px] w-[17%] md:w-full">
              <Input
                name="language_Two"
                placeholder="🔥   PREMIER FEAUTURES!"
                className="font-semibold leading-[normal] md:h-auto p-0 placeholder:text-deep_purple-A200 sm:h-auto text-left text-xs w-full"
                wrapClassName="border border-gray-500 border-solid p-[5px] rounded-lg w-60"
              ></Input>
            </div>
            <Text
              className="md:left-[15px] md:ml-[0] ml-[116px] mt-[25px] md:relative md:right-[] sm:text-[41px] md:text-[47px] text-[55px] sm:text-center text-gray-900"
              size="txtMontserratSemiBold55"
            >
              <span className="text-gray-900 font-montserrat text-left font-semibold">
                Discover our Product’s{" "}
              </span>
              <span className="text-deep_orange-300 font-montserrat text-left font-semibold">
                Capabilities
              </span>
            </Text>
            <Text
              className="sm:leading-[20.00px] leading-[30.00px] sm:left-2 md:ml-[0] ml-[238px] mt-4 relative right-[100px] sm:right-[] md:right-px sm:text-[15px] md:text-[21px] text-[23px] text-center text-gray-600"
              size="txtInterMedium23"
            >
              <>
                Don&#39;t settle for mediocrity - embrace the future of
                management <br />
                with Manage Wise.
              </>
            </Text>
            <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between md:ml-[0] ml-[37px] mt-[101px] w-[96%] md:w-full">
              <div className="bg-indigo-50 flex flex-col gap-[33px] sm:h-[450px] justify-center md:mt-0 mt-0.5 sm:p-[] sm:pb-[37px] sm:pl-5 pl-[37px] py-[37px] rounded-[30px] w-[47%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end ml-4 md:ml-[0] mr-[468px] mt-[45px] p-2.5 rounded-[25px] w-[12%] sm:w-[15%] md:w-[8%]">
                  <Img
                    className="h-[37px] w-[37px]"
                    src="images/img_solarstarbold.svg"
                    alt="solarstarbold"
                  />
                </div>
                <Text
                  className="leading-[60.00px] mb-3.5 sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-full"
                  size="txtMontserratSemiBold40"
                >
                  Boost productivity and streamline workflow with us. Enjoy our
                  intuitive interface and robust features.
                </Text>
              </div>
              <div className="font-inter md:h-[522px] h-[526px] relative w-[47%] md:w-full">
                <div className="absolute bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-[13px] h-max inset-[0] items-start justify-center m-auto p-[26px] sm:px-5 rounded-[30px] w-full">
                  <Text
                    className="ml-1 md:ml-[0] mt-[408px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                    size="txtInterSemiBold26"
                  >
                    Smart Task Management
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-gray-600 text-sm"
                    size="txtInterMedium14"
                  >
                    Say goodbye to chaos with our smart task management system
                  </Text>
                </div>
                <Img
                  className="absolute h-[318px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_qjeafhsmq29m1s55grw5kyb4.png"
                  alt="qjeafhsmq29m1sFive"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-[49px] items-center justify-between mt-[124px] w-full">
              <div className="md:h-[523px] h-[524px] relative w-[31%] md:w-full">
                <div className="absolute bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-3 h-full inset-[0] items-start justify-center m-auto p-[31px] sm:px-5 rounded-[30px]">
                  <Text
                    className="mt-[378px] text-gray-900 text-xl"
                    size="txtInterSemiBold20"
                  >
                    Flexible Scheduling
                  </Text>
                  <Text
                    className="leading-[20.00px] mb-1.5 text-[15px] text-gray-600"
                    size="txtInterMedium15"
                  >
                    <>
                      Stay productive with our flexible
                      <br />
                      scheduling system
                    </>
                  </Text>
                </div>
                <Img
                  className="absolute h-[339px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_lfrht3kbfxtmgazfwkylvyaksbg.png"
                  alt="lfrht3kbfxtmgaz"
                />
              </div>
              <div className="md:h-[523px] h-[532px] relative w-[32%] md:w-full">
                <div className="md:h-[523px] h-[532px] m-auto w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col md:gap-10 gap-[69px] justify-start w-full">
                      <Img
                        className="h-[347px] sm:h-auto object-cover w-full"
                        src="images/img_p65qwfjd0cd0zhzonfpsh7xu.png"
                        alt="p65qwfjd0cd0zhz"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[54px]">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Easy Communication
                        </Text>
                        <Text
                          className="leading-[20.00px] text-[15px] text-gray-600"
                          size="txtInterMedium15"
                        >
                          <>
                            Collaborate seamlessly with your team
                            <br />
                            in real-time
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-[13px] h-max inset-[0] items-start justify-center m-auto p-[37px] sm:px-5 rounded-[30px]">
                    <Text
                      className="md:ml-[0] ml-[9px] mt-[371px] text-gray-900 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Easy Communication
                    </Text>
                    <Text
                      className="leading-[20.00px] md:ml-[0] ml-[9px] text-[15px] text-gray-600"
                      size="txtInterMedium15"
                    >
                      <>
                        Collaborate seamlessly with your team
                        <br />
                        in real-time
                      </>
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[347px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_p65qwfjd0cd0zhzonfpsh7xu.png"
                  alt="p65qwfjd0cd0zhz_One"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[31%] md:w-full">
                <div className="md:h-[521px] h-[524px] relative w-full">
                  <div className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-auto top-[3%] w-full">
                    <Img
                      className="h-[335px] md:h-auto object-cover w-full"
                      src="images/img_fay6aeke67ytwg6hdfdpy2fahy.png"
                      alt="fay6aeke67ytwgSix"
                    />
                    <div className="h-[25px] md:ml-[0] ml-[30px] relative w-[62%]">
                      <Text
                        className="m-auto text-gray-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Smart Task Management
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-gray-900 text-xl w-max"
                        size="txtInterSemiBold20"
                      >
                        Smart Task Management
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[7%] leading-[20.00px] right-[12%] text-[15px] text-gray-600"
                    size="txtInterMedium15"
                  >
                    <>
                      Say goodbye to chaos with our smart task <br />
                      management system
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[7%] leading-[20.00px] left-[8%] text-[15px] text-gray-600"
                    size="txtInterMedium15"
                  >
                    <>
                      Gain valuable insights with our advanced
                      <br />
                      analytics feature
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[7%] leading-[20.00px] right-[12%] text-[15px] text-gray-600"
                    size="txtInterMedium15"
                  >
                    <>
                      Say goodbye to chaos with our smart task <br />
                      management system
                    </>
                  </Text>
                  <div className="absolute bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-14 h-full inset-[0] justify-center m-auto rounded-[30px] w-full">
                    <Img
                      className="h-[335px] sm:h-auto mt-4 object-cover w-full"
                      src="images/img_fay6aeke67ytwg6hdfdpy2fahy.png"
                      alt="fay6aeke67ytwgSix_One"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start mb-9 md:ml-[0] ml-[30px]">
                      <Text
                        className="text-gray-900 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Analytics
                      </Text>
                      <Text
                        className="leading-[20.00px] text-[15px] text-gray-600"
                        size="txtInterMedium15"
                      >
                        <>
                          Gain valuable insights with our advanced
                          <br />
                          analytics feature
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900_01 flex flex-col items-center justify-start pt-[69px] md:px-10 sm:px-5 px-[69px] w-full">
            <div className="flex flex-col items-center justify-start max-w-[1302px] mt-5 mx-auto w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="bg-white-A700 border border-gray-500 border-solid flex flex-row font-montserrat gap-2.5 h-[33px] md:h-auto items-center justify-center sm:px-5 px-[30px] py-5 rounded-lg w-[153px]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_fluentemojistarstruck.svg"
                        alt="fluentemojistar"
                      />
                      <Text
                        className="text-[11px] text-deep_purple-A200 w-[520px]"
                        size="txtMontserratSemiBold11"
                      >
                        <span className="text-deep_purple-A200 font-montserrat text-left font-semibold">
                          {" "}
                        </span>
                        <span className="text-deep_purple-A200 font-montserrat text-left font-bold">
                          AND MORE.....
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="leading-[70.00px] mt-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-full"
                      size="txtMontserratSemiBold50"
                    >
                      <span className="text-white-A700 font-montserrat text-left font-semibold">
                        Explore an array of features that elevate your{" "}
                      </span>
                      <span className="text-deep_orange-300 font-montserrat text-left font-semibold">
                        Productivity
                      </span>
                      <span className="text-white-A700 font-montserrat text-left font-semibold">
                        {" "}
                        to new heights
                      </span>
                    </Text>
                    <Text
                      className="leading-[40.00px] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-gray-500"
                      size="txtInterSemiBold28"
                    >
                      <>
                        Discover the tools that will revolutionize the way you{" "}
                        <br />
                        manage and optimize your operations
                      </>
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-[54px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[71px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_02 flex flex-1 flex-col items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                    <div className="bg-deep_purple-A200 h-16 mt-4 rounded-[20px] w-16"></div>
                    <Text
                      className="leading-[30.00px] mt-[51px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                      size="txtInterSemiBold32"
                    >
                      <>
                        Cross-Platform <br />
                        Compatibility
                      </>
                    </Text>
                    <Text
                      className="leading-[20.00px] mb-[18px] mt-[30px] text-[15px] text-center text-gray-500"
                      size="txtInterSemiBold15"
                    >
                      <>
                        Enjoy the flexibility of cross-platform compatibility.
                        Our product works seamlessly across desktop, web, and
                        mobile devices, allowing you <br />
                        to work from your preferred device.
                      </>
                    </Text>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col justify-center p-[26px] sm:px-5 rounded-[30px] shadow-bs w-full">
                    <div className="bg-deep_purple-A200 h-16 sm:left-[165px] md:ml-[0] ml-[139px] mr-[143px] mt-10 sm:relative rounded-[20px] w-16"></div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[51px] md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                      size="txtInterSemiBold26WhiteA700"
                    >
                      <>
                        Stay Informed <br />
                        with Essential Notifications
                      </>
                    </Text>
                    <Text
                      className="leading-[20.00px] mb-[42px] md:ml-[0] ml-[41px] mr-6 mt-[30px] text-[15px] text-center text-gray-500 w-[82%] sm:w-full"
                      size="txtInterSemiBold15"
                    >
                      Automate support from first customer contact to closing
                      the ticket. Drastically improve time to resolution.
                      Automate support from first customer contact to closing
                      the ticket.
                    </Text>
                  </div>
                  <div className="bg-gray-900_02 flex flex-1 flex-col justify-start p-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                    <div className="bg-deep_purple-A200 h-16 sm:left-[165px] md:ml-[0] ml-[125px] mr-[129px] mt-[26px] sm:relative rounded-[20px] w-16"></div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[3px] mt-[51px] sm:text-[23px] md:text-[25px] text-[27px] text-center text-white-A700"
                      size="txtInterSemiBold27"
                    >
                      <>
                        Secure Data Encryption <br />
                        at all times
                      </>
                    </Text>
                    <Text
                      className="leading-[20.00px] mb-12 md:ml-[0] ml-[27px] mt-[30px] text-[15px] text-center text-gray-500 w-[89%] sm:w-full"
                      size="txtInterSemiBold15"
                    >
                      Trust in our robust data encryption to keep your sensitive
                      information safe and secure. Rest easy knowing your data
                      is protected at all times.
                    </Text>
                  </div>
                </List>
                <Text
                  className="sm:leading-[40.00px] leading-[70.00px] mt-[220px] sm:text-[40px] md:text-[50px] text-[58px] text-center text-white-A700"
                  size="txtMontserratSemiBold58"
                >
                  <span className="text-white-A700 font-montserrat font-semibold">
                    Enable{" "}
                  </span>
                  <span className="text-deep_orange-300 font-montserrat font-semibold">
                    Integration
                  </span>
                  <span className="text-white-A700 font-montserrat font-semibold">
                    <>
                      {" "}
                      with <br />
                      other popular tools and
                      <br /> platforms
                    </>
                  </span>
                </Text>
                <Text
                  className="leading-[40.00px] md:left-[200px] sm:left-[25%]  md:ml-[0] ml-[295px] mt-9 md:relative sm:text-xl md:text-[26px] text-[28px] text-center text-gray-500 w-[55%] "
                  size="txtInterSemiBold28"
                >
                  Seamlessly connect and amplify your workflow by enabling
                  integration with a diverse array of widely-used tools and
                  platforms.
                </Text>
                <Img
                  className="h-[334px] sm:h-auto md:ml-[0] ml-[309px] mt-[85px] object-cover w-1/2 md:w-full"
                  src="images/img_sqd7mkwgkdqrrq1a99k5z1zlfa.png"
                  alt="sqd7mkwgkdqrrqOne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>






    </>
  );
};
















export default DesignPage;