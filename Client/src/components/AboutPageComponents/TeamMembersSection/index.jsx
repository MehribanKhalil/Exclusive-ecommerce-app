import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TeamMember from "./TeamMember";
import './index.scss'

const TeamMembersSection = () => {
  return (
    <section id="team-members" className="wrapper py-16" >
      <Swiper  
      slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
       }}
        modules={[Pagination]}
        className="mySwiper sample-slider"
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            568:{
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
        <SwiperSlide>
          
          <TeamMember
            memberImage="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            memberName="Tom Cruise"
            memberPosition="Founder & Chairman"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            memberImage="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1704067200&Signature=E5MccMjv72XeK8ijLXaN5XI5tmcI~04ZhEL1EaAbck9HSms00ISO8~fr329CZfaydefkfbSvgeqln5pDBpWSLUHjGM6nIOofAwIjJDVDnuFOdUkhkyYepyYHg1oz~wcema0uSajOXKZmV0bIaLLMQjxqTDL3g4EzGnYbcy5jXll5~CV5MSRH09KC4o04qaoxARiEkrNl7GWgxA2SgVT1lF8ZXLoLAfqwip~7hzZGqG9w6j601J-VEP6ZtLv6wAn18gXSlbvhCTS2mNQ5GEfN3L86M0VsGh-haZ7hXF29ew6gEyxQypFOBf-YN~2W~C1q3YPlv0OrTyFRjS4u6BnLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            memberName="Emma Watson"
            memberPosition="Managing Director"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            memberImage="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1704067200&Signature=msJF1-pczg51YY9Xa~xdgiR6RTSmXIISE47H4CCUOfJGwWJmz8iRLQH6ek4FdS6EekBFp-d3qyUnTB-aOPhmczik8nOtjp805b9cXf4jkDS-1WiViG6WNL80WVkY3r3dNPX0-iIVeWHPSY8gQkVJKRNywuazNcdHsXLhVTOY8xBAuFqJ~0p-cyg6rhY0Gf1sUQqSGjFLsvg94JRL0vYjBFN3xyEmQ~B2lk4~5jZ6VcVI1MqA5OY9TCi0OpM9XA4ajSqDmQlbZSw8mvgIV7P57oBd7ksU~Ze5uEwMZuNvvRT4u7DG2A9191usL~T8nZ8IKsHB3OGngF8VYjPHOUvlkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            memberName="Will Smith"
            memberPosition="Product Designer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            memberImage="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1704067200&Signature=E5MccMjv72XeK8ijLXaN5XI5tmcI~04ZhEL1EaAbck9HSms00ISO8~fr329CZfaydefkfbSvgeqln5pDBpWSLUHjGM6nIOofAwIjJDVDnuFOdUkhkyYepyYHg1oz~wcema0uSajOXKZmV0bIaLLMQjxqTDL3g4EzGnYbcy5jXll5~CV5MSRH09KC4o04qaoxARiEkrNl7GWgxA2SgVT1lF8ZXLoLAfqwip~7hzZGqG9w6j601J-VEP6ZtLv6wAn18gXSlbvhCTS2mNQ5GEfN3L86M0VsGh-haZ7hXF29ew6gEyxQypFOBf-YN~2W~C1q3YPlv0OrTyFRjS4u6BnLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            memberName="Emma Watson"
            memberPosition="Managing Director"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamMember
            memberImage="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            memberName="Tom Cruise"
            memberPosition="Founder & Chairman"
          />
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default TeamMembersSection;
