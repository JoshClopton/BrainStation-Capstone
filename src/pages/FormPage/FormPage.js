import React from "react";
import "./FormPage.scss";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Header } from "../../components/Header/Header";

export const FormPage = () => {
	return (
		<div>
			<Header />
			<h1>Create a new shelf:</h1>
			<Formik
				initialValues={{
					shelf: "",
					item: "",
					description: "",
				}}
				onSubmit={(e) => {
					axios
						.post(
							`http://localhost:8000/shelves`,
							{
								shelf: e.shelf,
								description: e.description,
								item: e.item,
							},
							{ withCredentials: true }
						)
						// .then(() => {
						//   // Re-fetch the posts
						//   this.props.onPostCreate();
						//   e.target.reset();
						// })
						.catch((err) => {
							console.log("Error creating a new post:", err);
						});
				}}
			>
				<Form>
					<label htmlFor="shelf">Shelf</label>
					<Field id="shelf" name="shelf" />
					<label htmlFor="item">Item</label>
					<Field id="item" name="item" />
					<label htmlFor="description">Description</label>
					<Field id="description" name="description" />
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
};
