import { useState } from "react";


export const Form = ({ onCancel, onSubmit }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [authorEmail, setAuthorEmail] = useState('');

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleAuthorNameChange = (e) => {
		setAuthorName(e.target.value);
	};

	const handleAuthorEmailChange = (e) => {
		setAuthorEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title,
			content,
            name: authorName,
			email: authorEmail
		};
		onSubmit(data);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input type="text" value={title} onChange={handleTitleChange} required />
			</label>
			<label>
				Content:
				<textarea value={content} onChange={handleContentChange} required></textarea>
			</label>
			<label>
				Author Name:
				<input type="text" value={authorName} onChange={handleAuthorNameChange} required />
			</label>
			<label>
				Author Email:
				<input type="email" value={authorEmail} onChange={handleAuthorEmailChange} required />
			</label>
			<button type="submit">Submit</button>
			<button type="button" onClick={onCancel}>Cancel</button>
		</form>
	);
};