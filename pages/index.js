import React from "react";
import Head from "../components/head";
import Link from "next/link";
import "../styles/main.css";
import axios from "axios";

const Home = (props) => {
  return (
    <div>
      <Head title="Portopolio Liandi Haikal" />

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="p-4">
          <h1 className="text-gray-700 leading-normal">
            Hello I'm Liandi Hai<span className="text-purple-500">kal_</span>
          </h1>
          <p className="text-gray-700 leading-normal">
            {" "}
            <span className="text-purple-500">Programmer Back End</span>{" "}
          </p>
          <p className="text-gray-700 leading-normal">
            Contact Me :
            <span className="text-purple-500">
              {" "}
              <Link href="https://www.facebook.com/liandi.haikal">
                <a>Facebook</a>
              </Link>{" "}
            </span>
            <span className="text-purple-500">
              {" "}
              <Link href="https://www.instagram.com/yrugmst/">
                <a>Instagram</a>
              </Link>{" "}
            </span>
          </p>
          <p className="text-gray-700 leading-normal">
            Whatsapp :
            <span className="text-purple-500">
              {" "}
              <Link href="https://wa.me/6281260313488?text=Hallo%20Haikal,%20Saya%20sangat%20menyukai%20Portofoliomu">
                <a>0812 6031 3488</a>
              </Link>
              ,{" "}
            </span>
          </p>
          <p className="text-gray-700 leading-normal">
            Telegram : <span className="text-purple-500">0821 6842 0111,</span>
          </p>
          <p className="text-gray-700 leading-normal">
            Phone :
            <span className="text-purple-500">
              {" "}
              <Link href="tel:+6281260313488">
                <a>0812 6031 3488</a>
              </Link>{" "}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {props.data.map((data) => (
            <div
              key={data.id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <Link href={data.link}>
                    <a>
                      <div className="font-bold text-xl mb-2">{data.name}</div>
                    </a>
                  </Link>
                  <p className="text-gray-600 text-base">{data.desc}</p>
                  <div className="px-2 py-4">
                    <Link href={data.link}>
                      <a>
                        <button class="bg-gray-200 hover:bg-purple-700 hover:text-white text-sm font-semibold text-purple-700 py-2 px-4 rounded inline-flex items-center mr-2">
                          <span>Github</span>
                        </button>
                      </a>
                    </Link>
                    {data.demo === "" ? (
                      ""
                    ) : (
                      <Link href={data.demo}>
                        <a>
                          <button class="bg-gray-200 hover:bg-purple-700 hover:text-white text-sm font-semibold text-purple-700 py-2 px-4 rounded inline-flex items-center mr-2">
                            {" "}
                            Deploy{" "}
                          </button>
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async function () {
  const res = await await axios.get(
    "https://my-json-server.typicode.com/liankip/portofolio-api/project"
  );
  const data = await res.data;

  return {
    data,
  };
};

export default Home;
