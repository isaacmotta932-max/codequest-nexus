import { useState } from 'react';
import { X, Check, Sparkles, Lock, Crown, Palette } from 'lucide-react';
import {
  PIXEL_AVATARS,
  STARTER_PIXEL_AVATARS,
  PLANETARY_PIXEL_AVATARS,
  applyAvatarThemeToDOM,
  isAvatarUnlocked,
  type PixelAvatar,
} from '@/constants/pixelAvatars';

interface AvatarSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatarUrl?: string;
  completedLessons?: string[];
  onSelect: (avatar: PixelAvatar) => Promise<void> | void;
}

export function AvatarSelectorModal({
  isOpen,
  onClose,
  currentAvatarUrl,
  completedLessons = [],
  onSelect,
}: AvatarSelectorModalProps) {
  const [selectedId, setSelectedId] = useState<string>(() => {
    const current = PIXEL_AVATARS.find(
      (a) => a.dataUrl === currentAvatarUrl || a.id === currentAvatarUrl
    );
    return current ? current.id : PIXEL_AVATARS[0].id;
  });

  const [tab, setTab] = useState<'all' | 'starter' | 'planetary'>('all');

  if (!isOpen) return null;

  const activeAvatar =
    PIXEL_AVATARS.find((a) => a.id === selectedId) || PIXEL_AVATARS[0];
  const activeUnlockInfo = isAvatarUnlocked(activeAvatar, completedLessons);

  const displayedAvatars =
    tab === 'starter'
      ? STARTER_PIXEL_AVATARS
      : tab === 'planetary'
        ? PLANETARY_PIXEL_AVATARS
        : PIXEL_AVATARS;

  const unlockedPlanetaryCount = PLANETARY_PIXEL_AVATARS.filter(
    (av) => isAvatarUnlocked(av, completedLessons).unlocked
  ).length;

  const handleConfirm = () => {
    if (!activeUnlockInfo.unlocked) return;
    applyAvatarThemeToDOM(activeAvatar.dataUrl);
    void onSelect(activeAvatar);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0A0E1A] p-5 sm:p-6 shadow-2xl text-white overflow-hidden flex flex-col"
        style={{
          boxShadow: `0 0 40px ${activeAvatar.accentColor}28`,
          borderColor: `${activeAvatar.accentColor}40`,
        }}
      >
        {/* Glow de fundo dinâmico */}
        <div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
          style={{ background: activeAvatar.accentColor }}
        />

        {/* Cabeçalho */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="p-2.5 rounded-xl border border-white/10"
              style={{ background: `${activeAvatar.accentColor}18` }}
            >
              <Sparkles
                className="h-5 w-5"
                style={{ color: activeAvatar.accentColor }}
              />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-extrabold tracking-wide text-white flex items-center gap-2 flex-wrap">
                Arsenal de Insígnias Pixel Art
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/15 font-semibold">
                  20 Ícones + Temas Dinâmicos
                </span>
              </h2>
              <p className="text-xs text-gray-400 m-0 mt-0.5">
                Cada insígnia altera sutilmente a paleta de cores da sua interface.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Segmented Control (Abas) */}
        <div className="grid grid-cols-3 gap-1.5 bg-[#060913] p-1 rounded-2xl border border-white/10 mt-3.5 relative z-10">
          <button
            type="button"
            onClick={() => setTab('all')}
            className={`ios-press py-2 px-3 rounded-xl text-xs font-bold cursor-pointer border transition-all ${
              tab === 'all'
                ? 'bg-[#15203B] text-white border-white/20'
                : 'bg-transparent text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Todos (20)
          </button>
          <button
            type="button"
            onClick={() => setTab('starter')}
            className={`ios-press py-2 px-3 rounded-xl text-xs font-bold cursor-pointer border transition-all ${
              tab === 'starter'
                ? 'bg-[#15203B] text-[#00E5FF] border-[#00E5FF]/30'
                : 'bg-transparent text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Base 16-Bit (10)
          </button>
          <button
            type="button"
            onClick={() => setTab('planetary')}
            className={`ios-press py-2 px-3 rounded-xl text-xs font-bold cursor-pointer border transition-all flex items-center justify-center gap-1 ${
              tab === 'planetary'
                ? 'bg-[#15203B] text-[#FFD700] border-[#FFD700]/40'
                : 'bg-transparent text-gray-400 border-transparent hover:text-white'
            }`}
          >
            <Crown size={13} />
            <span>Planetas ({unlockedPlanetaryCount}/10)</span>
          </button>
        </div>

        {/* Grid com os Ícones Pixelados */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 my-4 overflow-y-auto p-1 pr-1.5 flex-1">
          {displayedAvatars.map((avatar) => {
            const isSelected = avatar.id === selectedId;
            const unlockStatus = isAvatarUnlocked(avatar, completedLessons);
            const isPlanetary = avatar.tier === 'planetary';

            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => setSelectedId(avatar.id)}
                className={`group relative flex flex-col items-center text-center p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 scale-[1.03] shadow-lg'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.06]'
                }`}
                style={{
                  borderColor: isSelected
                    ? avatar.accentColor
                    : isPlanetary && unlockStatus.unlocked
                      ? `${avatar.accentColor}45`
                      : undefined,
                  boxShadow: isSelected
                    ? `0 0 20px ${avatar.accentColor}40`
                    : undefined,
                }}
              >
                {/* Badge HD 24-Bit para os 10 novos ícones */}
                {isPlanetary && (
                  <span
                    className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md text-[8px] font-extrabold uppercase tracking-wider flex items-center gap-0.5"
                    style={{
                      background: `${avatar.accentColor}25`,
                      color: avatar.accentColor,
                      border: `1px solid ${avatar.accentColor}50`,
                    }}
                  >
                    <Crown size={9} /> HD
                  </span>
                )}

                {/* Badge Selecionado ou Cadeado */}
                {!unlockStatus.unlocked ? (
                  <span className="absolute top-1.5 right-1.5 rounded-full p-1 bg-black/70 border border-white/20 text-gray-300">
                    <Lock className="h-3 w-3" />
                  </span>
                ) : isSelected ? (
                  <span
                    className="absolute top-1.5 right-1.5 rounded-full p-0.5 text-black font-bold"
                    style={{ background: avatar.accentColor }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                ) : null}

                {/* Ícone Pixelado */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center p-1.5 mb-2 mt-2 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: `${avatar.accentColor}15`,
                    border: `1px solid ${avatar.accentColor}35`,
                    opacity: unlockStatus.unlocked ? 1 : 0.45,
                    filter: unlockStatus.unlocked ? 'none' : 'grayscale(55%)',
                  }}
                >
                  <img
                    src={avatar.dataUrl}
                    alt={avatar.name}
                    className="w-full h-full object-contain [image-rendering:pixelated]"
                  />
                </div>

                <span className="text-[11px] font-bold text-gray-100 group-hover:text-white line-clamp-1">
                  {avatar.name}
                </span>

                <span
                  className="text-[9px] mt-1 px-1.5 py-0.5 rounded font-mono"
                  style={{
                    color: avatar.accentColor,
                    background: `${avatar.accentColor}18`,
                  }}
                >
                  {avatar.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Preview do Ícone Ativo + Demonstração da Paleta da Interface + Progresso de Desbloqueio */}
        <div
          className="rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center gap-3.5 relative z-10 transition-colors"
          style={{
            background: `${activeAvatar.accentColor}10`,
            borderColor: `${activeAvatar.accentColor}40`,
          }}
        >
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            <div
              className="w-16 h-16 rounded-2xl border flex items-center justify-center p-2 shrink-0 relative"
              style={{
                borderColor: `${activeAvatar.accentColor}70`,
                background: activeAvatar.themePalette.bgTint,
                boxShadow: `0 0 18px ${activeAvatar.accentColor}35`,
              }}
            >
              <img
                src={activeAvatar.dataUrl}
                alt={activeAvatar.name}
                className="w-full h-full object-contain [image-rendering:pixelated]"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-extrabold text-white m-0">
                  {activeAvatar.name}
                </h3>
                <span
                  className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border font-bold"
                  style={{
                    color: activeAvatar.accentColor,
                    borderColor: `${activeAvatar.accentColor}50`,
                    background: `${activeAvatar.accentColor}18`,
                  }}
                >
                  {activeAvatar.tier === 'planetary'
                    ? '★ Guardião Planetário 24-Bit'
                    : 'Insígnia Base 16-Bit'}
                </span>
              </div>

              <p className="text-xs text-gray-300 m-0 mt-1 leading-snug">
                {activeAvatar.description}
              </p>

              {/* Status de Desbloqueio & Paleta */}
              <div className="flex items-center gap-3 flex-wrap mt-2">
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    activeUnlockInfo.unlocked
                      ? 'bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30'
                      : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {activeUnlockInfo.unlocked ? (
                    <>
                      <Check size={11} /> {activeUnlockInfo.progressText}
                    </>
                  ) : (
                    <>
                      <Lock size={11} /> 🔒 {activeUnlockInfo.progressText}
                    </>
                  )}
                </span>

                {/* Amostra da Paleta Sutil */}
                <div className="inline-flex items-center gap-1.5 text-[10px] text-gray-400">
                  <Palette size={12} style={{ color: activeAvatar.accentColor }} />
                  <span>Paleta da UI:</span>
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/30 inline-block"
                    style={{ background: activeAvatar.themePalette.primary }}
                    title="Cor Primária"
                  />
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/30 inline-block"
                    style={{ background: activeAvatar.themePalette.secondary }}
                    title="Cor Secundária"
                  />
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/30 inline-block"
                    style={{ background: activeAvatar.themePalette.surfaceTint }}
                    title="Tom de Superfície"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-end gap-3 mt-4 pt-3.5 border-t border-white/10 relative z-10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer bg-transparent border-none"
          >
            Fechar
          </button>

          {activeUnlockInfo.unlocked ? (
            <button
              type="button"
              onClick={handleConfirm}
              className="ios-press px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black transition-all duration-150 flex items-center gap-2 shadow-lg cursor-pointer border-none"
              style={{
                background: `linear-gradient(135deg, ${activeAvatar.accentColor}, ${activeAvatar.secondaryColor})`,
                boxShadow: `0 0 20px ${activeAvatar.accentColor}50`,
              }}
            >
              <Check className="h-4 w-4" /> Equipar Insígnia & Tema
            </button>
          ) : (
            <div className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-gray-400 flex items-center gap-1.5">
              <Lock size={13} /> Complete o planeta na Galáxia para desbloquear
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
