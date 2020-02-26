import React, { useEffect, useState } from "react";
import Head from "../components/head";
import Link from "next/link";
import Footer from "../components/footer";
import "bulma/css/bulma.min.css";
import axios from "axios";

const Home = (props) => {
	return (
		<div>
			<Head title='Portopolio Liandi Haikal' />

			<section className='hero'>
				<div className='hero-body'>
					<div className='container'>
						<h1 className='title'>
							Hello I'm
							<strong className='has-text-danger'>Liandi Haikal</strong>
						</h1>
						<h2 className='subtitle'>
							this My <strong className='has-text-danger'>Portofolio</strong>
						</h2>
					</div>
				</div>
			</section>

			<div className='section has-background-light'>
				<div className='container'>
					<div className='columns is-multiline '>
						{props.data.map((data) => (
							<div key={data.id} className='column is-one-third'>
								<article className='media notification has-background-white'>
									<figure className='media-left'>
										<span className='icon has-text-danger'>
											<i className={data.icon}></i>
										</span>
									</figure>
									<div className='media-content'>
										<div className='content'>
											<h1 className='title is-size-4 '>
												<Link href={data.link}>
													<a>
														{data.name}
													</a>
												</Link>
											</h1>
											<span className="tag is-danger ">{data.tag}</span>

											<p className='subtitle is-size-5 '>
												{data.desc}
											</p>
										</div>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />

			<style jsx>{`
				a {
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};

Home.getInitialProps = async function() {
	// fetch('https://api.tvmaze.com/search/shows?q=batman')
	// const data = await res.json()
	const res = await await axios.get(
		"https://my-json-server.typicode.com/liankip/portofolio-api/project"
	);
	const data = await res.data;

	return {
		data
	};
};

export default Home;
