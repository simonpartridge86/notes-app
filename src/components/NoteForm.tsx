import { NoteData, NoteFormMode } from "../types";

type NoteFormProps = {
  closeModal: () => void;
  formMode: NoteFormMode;
  formData: NoteData;
  setFormData: React.Dispatch<React.SetStateAction<NoteData>>;
};

export const NoteForm = ({
  formData,
  setFormData,
  closeModal,
}: NoteFormProps) => {
  const MAX_CONTENT_LENGTH = 200;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "content" && value.length > 250) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label>Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          name="content"
          value={formData.content}
          className="form-input"
          onChange={handleChange}
          maxLength={MAX_CONTENT_LENGTH}
          rows={6}
        />
        <small className="form-input-count">
          {formData.content.length} / {MAX_CONTENT_LENGTH}
        </small>
      </div>
      <div className="form-group">
        <label>Due Date *</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <small>* required</small>
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};
