// components/QRCodeDonationBox.tsx
export default function QRCodeDonationBox() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 rounded-lg bg-zinc-100 p-6 shadow-md md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-zinc-800 md:text-2xl">Contribua com Pix</h3>
        <p className="mt-2 text-sm text-zinc-700 md:text-base">
          Aponte a câmera do seu celular para o QR Code e ajude a preservar nossa história.
        </p>
        <div className="mt-4 text-sm text-zinc-600">
          <p>
            <strong>CNPJ:</strong> 10.675.909.0001-01
          </p>
          <p>
            <strong>Nome:</strong> Associação Quilombola Urbana João Borges Vieira
          </p>
        </div>
      </div>
      <img
        src="/qrcode.png"
        alt="QR Code para doação via Pix"
        className="mt-4 h-48 w-48 rounded-lg border md:mt-0"
      />
    </div>
  );
}
