import { useState, useEffect } from "react";
import type { IPasswordCard } from "../../Interfaces/PasswordCard";
import { createCard, updateCard, deleteCard } from "../../Services/api";
import { PasswordField } from "./PasswordField";
import { ModalActions } from "./ModalActions";
import { InputField } from "../InputField/InputField";
import { validUrl } from "../../Utils/validUrl";

interface ICardModal {
  card?: IPasswordCard;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CardModal({ card, onClose, onSuccess }: ICardModal) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (card) {
      setName(card.name); //eslint-disable-line
      setUrl(card.url);
      setUsername(card.username);
      setPassword(card.password);
    } else {
      setName("");
      setUrl("");
      setUsername("");
      setPassword("");
    }
  }, [card]);

  async function handleSave() {
    const data = { name, url, username, password } as IPasswordCard;
    try {
      if (card) {
        await updateCard(card.id, data);
      } else {
        await createCard(data);
      }
      onSuccess();
    } catch (error) {
      console.error("Error saving card", error);
    }
  }

  async function handleDelete() {
    if (!card) return;
    try {
      await deleteCard(card.id);
      onSuccess();
    } catch (error) {
      console.error("Error deleting card", error);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const isFormValid =
    name.trim().length > 0 &&
    username.trim().length > 0 &&
    password.trim().length > 0 &&
    url.trim().length > 0 &&
    validUrl(url);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">{card ? "Edit" : "New"}</h2>
      <InputField
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onFocus={() => {
          if (url.trim() === "") setUrl("https://www.");
        }}
      />
      <InputField
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <PasswordField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        copied={copied}
        onCopy={handleCopy}
      />
      <ModalActions
        onClose={onClose}
        onSave={handleSave}
        onDelete={handleDelete}
        showDelete={!!card}
        disabledSafe={!isFormValid}
      />
    </div>
  );
}
