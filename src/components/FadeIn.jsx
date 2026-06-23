import { useFadeIn } from "../hooks/useFadeIn";

function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
