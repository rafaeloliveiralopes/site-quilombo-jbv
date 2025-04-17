import Image from 'next/image';

export default function QRCodeDonationBox() {
  return (
    <div className="my-4 gap-4 rounded-lg bg-zinc-300 p-6 shadow-md md:my-0 md:max-w-sm">
      <h3 className="text-xl font-semibold text-zinc-800 md:text-center md:text-3xl">
        Ajude a Nossa Associação
      </h3>
      <p className="mt-2 text-sm text-zinc-700 md:text-base">
        Aponte seu celular para a chave o QRCODE e contribua com a preservação de nossa história.
      </p>
      <div className="md:mx-20">
        <Image
          src="/qrcode-pix.png"
          alt="QR Code para doação via Pix"
          className="mt-4 h-48 w-48 rounded-xl border md:mt-0 md:py-2"
          width={120}
          height={120}
        />
      </div>
      <div className="mt-4 text-sm">
        <p>
          <strong>DADOS:</strong>
        </p>
        <p>
          <strong>CNPJ:</strong> 10.675.909.0001-01
        </p>
        <p>
          <strong>NOME:</strong> Associação Quilombola Urbana João Borges Vieira
        </p>
      </div>
    </div>
  );
}
