"use client";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Avatar, Typography } from "@mui/material";

import { BadgetDetail, Carousel } from "@/components/home";

const Wrapper = styled(Box)(() => ({
  width: "100%",
  background: "#FFFAF2",
  padding: "0 24px",
  boxSizing: "border-box",
}));

const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  width: "568px",
  padding: "114px 0px",
  boxSizing: "border-box",
  margin: "0 auto",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingTop: "66px",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: "48px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "40px",
  color: "#1B1B1B",
  letterSpacing: "0.0025em",
  marginBottom: "48px",

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "24px",
    marginBottom: "24px",
  },
}));

const SubTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "26px",
  color: "#1B1B1B",
  marginBottom: "16px",
}));

const ViewIcon = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  background: "#E38869",
  borderRadius: "50%",
  overflow: "hidden",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    width: "40px",
    height: "40px",
  },
}));

const actionData = [
  {
    icon: "",
    title: "Schedule a follow-up appointment",
    text: "Your Zealthy provider requested you schedule a follow-up during your last visit.",
    type: "danger",
  },
  {
    icon: "",
    title: "Reschedule Zealthy visit",
    text: "We want to meet with you! Please go ahead and reschedule your visit.",
    type: "danger",
  },
  {
    icon: "",
    title: "Schedule lab work or upload recent labs",
    text: "Zealthy ordered lab work for you. Schedule an appointment at a Quest or Labcorp location near you, or upload recent lab work that you completed.",
    type: "danger",
  },
  {
    icon: "",
    title: "Please update payment method",
    text: "Your card information is no longer valid. To continue your Zealthy membership, please update your payment method.",
    type: "danger",
  },
  {
    icon: "",
    title: "Please update insurance information",
    text: "Your insurance information appears to be inactive. If it recently changed, please update here.",
    type: "danger",
  },
  {
    icon: "",
    title: "Please update insurance information",
    text: "Your insurance information appears to be inactive. If it recently changed, please update here.",
    type: "danger",
  },
  {
    icon: "",
    title: "Please update insurance information",
    text: "Your insurance information appears to be inactive. If it recently changed, please update here.",
    type: "danger",
  },
  {
    icon: "",
    title: "Please update insurance information",
    text: "Your insurance information appears to be inactive. If it recently changed, please update here.",
    type: "danger",
  },
];

const careDate = [
  {
    icon: "",
    title: "Schedule a visit or request a new prescription",
    text: "Same/next-day appointments over video, phone or message",
    type: "default",
  },
  {
    icon: "",
    title: "Schedule a visit or request a new prescription",
    text: "Same/next-day appointments over video, phone or message",
    type: "default",
  },
  {
    icon: "",
    title: "Schedule a visit or request a new prescription",
    text: "Same/next-day appointments over video, phone or message",
    type: "default",
  },
  {
    icon: "",
    title: "Schedule a visit or request a new prescription",
    text: "Same/next-day appointments over video, phone or message",
    type: "default",
  },
  {
    icon: "",
    title: "Schedule a visit or request a new prescription",
    text: "Same/next-day appointments over video, phone or message",
    type: "default",
  },
];

export default function Home() {
  const handleView = () => {};

  const UserAvatar = () => {
    return (
      <Avatar
        alt="user"
        src="/images/user.png"
        sx={{ width: "48px", height: "48px" }}
      />
    );
  };

  const ActionIcon = () => {
    return (
      <ViewIcon>
        <Image alt="" src="/images/clock.png" width={24} height={24} />
      </ViewIcon>
    );
  };

  const CareIcon = () => {
    return (
      <ViewIcon sx={{ background: "#8ACDA0", padding: "10px" }}>
        <Image alt="" src="/images/clock.png" width={24} height={24} />
      </ViewIcon>
    );
  };

  return (
    <Wrapper>
      <Content>
        <Title>Hi, [Kyle]! </Title>

        <Section sx={{ mb: "48px" }}>
          <BadgetDetail
            type="primary"
            icon={<UserAvatar />}
            text="Join [Video] Visit with Dr. Mark Greene"
            time="Today at 4:00 PM ET"
            onView={handleView}
          />
          <BadgetDetail
            type="primary"
            icon={<UserAvatar />}
            text="Join [Video] Visit with Dr. Mark Greene"
            time="Today at 4:00 PM ET"
            onView={handleView}
          />
        </Section>

        <Section>
          <SubTitle>Action items</SubTitle>

          {actionData.map((item, i) => (
            <BadgetDetail
              key={i}
              type={item.type}
              icon={<ActionIcon />}
              text={item.title}
              time={item.text}
              onView={handleView}
            />
          ))}
        </Section>

        <Section>
          <SubTitle>Get the care you need</SubTitle>

          {careDate.map((item, i) => (
            <BadgetDetail
              key={i}
              type={item.type}
              icon={<CareIcon />}
              text={item.title}
              time={item.text}
              onView={handleView}
            />
          ))}
        </Section>

        <Section>
          <SubTitle>Explore our offerings</SubTitle>

          <Carousel />
        </Section>
      </Content>
    </Wrapper>
  );
}
