import React from "react";
import "./trems.css";
import Navbar from "../Navbar/navbar";

const Trems = () => {
  return (
    <>
      <div className="container my-5 ">
        <div className=" col-sm-10 offset-sm-1 col-lg-10 offset-lg-1 trems-bg p-4">
          <div class=" p-3  text-white back-img">
            <h1 class="mb-4 h2 text-center  text-white">Terms And Condition</h1>
            <h4 className="text-center text-white">
              Blogger has the following limitations on content storage and
              bandwidth, per user account
            </h4>
            <ul className="trem-text text-white">
              <li className="p-2">
                Number of pages-There is no limit on the number of pages you can
                have on one blog
              </li>
              <li className="p-2">
                Number of posts - There is no limit on the number of posts one
                can have in one blog. However, a maximum of 100 posts can be
                created or published per day.
              </li>

              <li className="p-2">
                We no longer allow our users to post sexually explicit content,
                we banned sexual content and Images
              </li>
              <li className="p-2">
                If you post unwanted content or Content against our trems and
                condition.Admin has all rights to hide your post from displaying{" "}
              </li>
              <li className="p-2">
                Account suspension : if your post is violating any terms of
                service, it may be suspended by Blogger without any notice.
                Repeated violations may lead to account suspension.
              </li>

              <li className="p-2">
                users can't add content that violates the law or harms anyone
                else thereby creating a safe and legal community. Note that this
                is only an excerpt of a long clause, so check out the entirety
                of the agreement to see what other kinds of restrictions are
                common with user content.
              </li>
            </ul>
            <h3 className="text-center text-white">Privacy policies</h3>
            <ul className="trem-text text-white">
              <li className="p-2 ">
                You can use our services in a variety of ways to manage your
                privacy. For example, you can sign up for a Google Account if
                you want to create and manage content like emails and photos, or
                see more relevant search results. And across our services, you
                can adjust your privacy settings to control what we collect and
                how your information is used.
              </li>
              <li className="p-2">
                We also collect the content you create, upload, or receive from
                others when using our services. This includes things like email
                you write and receive, photos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trems;
