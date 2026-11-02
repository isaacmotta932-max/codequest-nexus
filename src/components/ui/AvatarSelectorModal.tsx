import { useState } from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { PIXEL_AVATARS, type PixelAvatar } from '@/constants/pixelAvatars';

interface AvatarSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatarUrl?: string;
  onSelect: (avatar: PixelAvatar) => Promise<void> | void;
}

export function AvatarSelectorModal({
  isOpen,
  onClose,
  currentAvatarUrl,
  onSelect,
}: AvatarSelectorModalProps) {
  const [selectedId, setSelectedId] = useState<string>(() => {
    const current = PIXEL_AVATARS.find(
      (a) => a.dataUrl === currentAvatarUrl || a.id === currentAvatarUrl
    );
    return current ? current.id : PIXEL_AVATARS[0].id;
  });

  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const activeAvatar = PIXEL_AVATARS.find((a) => a.id === selectedId) || PIXEL_AVATARS[0];

  const handleConfirm = async () => {
    try {
      setSaving(true);
      await onSelect(activeAvatar);
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 700);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0A0E1A] p-6 shadow-2xl shadow-cyan-500/10 text-white overflow-hidden"
        style={{
          boxShadow: `0 0 35px ${activeAvatar.accentColor}25`,
        }}
      >
        {/* Glow de fundo */}
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
          style={{ background: activeAvatar.accentColor }}
        />

        {/* Cabeçalho */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-lg border border-white/10"
              style={{ background: `${activeAvatar.accentColor}15` }}
            >
              <Sparkles className="h-5 w-5" style={{ color: activeAvatar.accentColor }} />
            </div>
            <div>
              <h2 className="text-xl font-bold font-mono tracking-wider uppercase text-white flex items-center gap-2">
                Insígnias Pixel Art
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-normal">
                  10 Ícones de Programação
                </span>
              </h2>
              <p className="text-xs text-gray-400">
                Escolha seu avatar 8-bit temático para sua jornada de coder.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Grid com 10 Opções de Ícones Pixelados */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-5 max-h-[50vh] overflow-y-auto p-1 pr-2 custom-scrollbar">
          {PIXEL_AVATARS.map((avatar) => {
            const isSelected = avatar.id === selectedId;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => setSelectedId(avatar.id)}
                className={`group relative flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-white/40 bg-white/10 scale-105 shadow-lg'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.06]'
                }`}
                style={{
                  borderColor: isSelected ? avatar.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 20px ${avatar.accentColor}40` : undefined,
                }}
              >
                {/* Badge Selecionado */}
                {isSelected && (
                  <span
                    className="absolute top-1.5 right-1.5 rounded-full p-0.5 text-black font-bold"
                    style={{ background: avatar.accentColor }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                )}

                {/* Ícone Pixelado (Crisp Pixel-Art Rendering) */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center p-1.5 mb-2 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: `${avatar.accentColor}15`,
                    border: `1px solid ${avatar.accentColor}30`,
                  }}
                >
                  <img
                    src={avatar.dataUrl}
                    alt={avatar.name}
                    className="w-full h-full object-contain [image-rendering:pixelated]"
                  />
                </div>

                <span className="text-xs font-semibold text-gray-200 group-hover:text-white line-clamp-1">
                  {avatar.name}
                </span>

                <span
                  className="text-[10px] mt-0.5 px-1.5 py-0.5 rounded font-mono"
                  style={{
                    color: avatar.accentColor,
                    background: `${avatar.accentColor}15`,
                  }}
                >
                  {avatar.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Preview do Ícone Ativo */}
        <div
          className="rounded-xl border border-white/10 p-3.5 flex items-center gap-4 relative z-10 transition-colors"
          style={{ background: `${activeAvatar.accentColor}08` }}
        >
          <div
            className="w-16 h-16 rounded-xl border flex items-center justify-center p-2 shrink-0"
            style={{
              borderColor: `${activeAvatar.accentColor}60`,
              background: '#0B101D',
              boxShadow: `0 0 15px ${activeAvatar.accentColor}30`,
            }}
          >
            <img
              src={activeAvatar.dataUrl}
              alt={activeAvatar.name}
              className="w-full h-full object-contain [image-rendering:pixelated]"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white font-mono">{activeAvatar.name}</h3>
              <span
                className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border"
                style={{
                  color: activeAvatar.accentColor,
                  borderColor: `${activeAvatar.accentColor}50`,
                  background: `${activeAvatar.accentColor}15`,
                }}
              >
                {activeAvatar.category}
              </span>
            </div>
            <p className="text-xs text-gray-300 mt-1 line-clamp-2">{activeAvatar.description}</p>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-end gap-3 mt-5 pt-4 border-t border-white/10 relative z-10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="button"
            disabled={saving || savedSuccess}
            onClick={handleConfirm}
            className="px-5 py-2 rounded-lg text-sm font-bold font-mono uppercase tracking-wider text-black transition-all duration-200 flex items-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
            style={{
              background: activeAvatar.accentColor,
              boxShadow: `0 0 20px ${activeAvatar.accentColor}60`,
            }}
          >
            {savedSuccess ? (
              <>
                <Check className="h-4 w-4" /> Avatar Atualizado!
              </>
            ) : saving ? (
              'Salvando...'
            ) : (
              <>
                <Check className="h-4 w-4" /> Escolher este Avatar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
