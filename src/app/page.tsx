import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-center w-full bg-[#f5f5f5]">
        <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-purple-200">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-purple-700">AJ</span>
              <span className="text-lg text-purple-600">Ana Julia</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#inicio" className="text-sm font-medium text-black hover:text-purple-700">
                Início
              </Link>
              <Link href="#quem-somos" className="text-sm font-medium text-black hover:text-purple-700">
                Quem Somos
              </Link>
              <Link href="#como-funciona" className="text-sm font-medium text-black hover:text-purple-700">
                Como Funciona
              </Link>
              <Link href="#atendimento" className="text-sm font-medium text-black hover:text-purple-700">
                Atendimento
              </Link>
              <Link href="#depoimentos" className="text-sm font-medium text-black hover:text-purple-700">
                Depoimentos
              </Link>
              <Link href="#proposta" className="text-sm font-medium text-black hover:text-purple-700">
                Proposta
              </Link>
            </nav>
            <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white">Fale Conosco</Button>
            <Button variant="outline" size="icon" className="md:hidden border-purple-300">
              <span className="sr-only">Menu</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </header>

        <main className="flex-1 w-full">
          {/* Hero Section */}
          <section id="inicio" className="w-full relative">
            <div className="relative h-[500px] w-full">
              <Image
                  src="/images/banner.jpg"
                  alt="Ana Julia Assistência Virtual"
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                </div>
              </div>
            </div>
          </section>

          {/* Quem Somos */}
          <section id="quem-somos" className="w-full py-16 bg-gradient-to-b from-purple-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-4 text-purple-800">Quem somos nós?</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8 border border-purple-100">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold uppercase mb-4 text-purple-700">Apresentação Pessoal</h3>
                    <p className="mb-4 text-black">
                      Me chamo Ana Júlia, sou a CEO da empresa e tenho ampla experiência com médicos, dentistas e
                      profissionais da saúde, já ofereci suporte para mais de 40 profissionais.
                    </p>
                    <p className="text-black">
                      O foco de nossa empresa é otimizar cada vez mais o seu negócio, oferecendo suporte especializado,
                      aplicando estratégias de conversão, otimizando a organização de seu negócio e fidelizando seus
                      pacientes.
                    </p>
                  </div>
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200">
                    <Image
                        src="/placeholder.svg?height=192&width=192"
                        alt="Ana Júlia"
                        width={192}
                        height={192}
                        className="object-cover"
                    />
                  </div>
                </div>
                <div className="border-t border-purple-100 pt-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <p className="mb-4 text-black">
                        Meu nome é Isabella Borba, trabalho com publicidade a 7 anos. Sou sócia da Ana Júlia Assistente
                        Virtual e atuo no suporte geral, na criação de artes gráficas e no gerenciamento de Instagram dos
                        clientes.
                      </p>
                      <p className="italic underline text-purple-700 cursor-pointer hover:text-purple-900">
                        Clique aqui para acessar meu Portfólio individual.
                      </p>
                    </div>
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200">
                      <Image
                          src="/placeholder.svg?height=192&width=192"
                          alt="Isabella Borba"
                          width={192}
                          height={192}
                          className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Como Funciona */}
          <section id="como-funciona" className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Como funciona?</h2>
              <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-lg shadow-sm border border-purple-100">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2 text-purple-700">1</div>
                    <div className="text-sm font-bold text-black">O SEU CLIENTE BUSCA</div>
                  </div>
                  <div className="hidden md:block text-green-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-center border-2 border-green-600 rounded-lg p-4 bg-white">
                    <div className="font-bold text-xl mb-2 text-purple-700">2</div>
                    <div className="text-sm font-bold text-black">ATENDEMOS DE FORMA ACOLHEDORA</div>
                  </div>
                  <div className="hidden md:block text-green-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2 text-purple-700">3</div>
                    <div className="text-sm font-bold text-black">AGENDAMENTO REALIZADO</div>
                  </div>
                  <div className="hidden md:block text-green-600">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-center border-2 border-green-600 rounded-lg p-4 bg-white">
                    <div className="font-bold text-xl mb-2 text-purple-700">4</div>
                    <div className="text-sm font-bold text-black">VOCÊ FOCA APENAS NA CONSULTA</div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-purple-700 mb-4">O atendimento humanizado proporciona</p>
                  <p className="text-xl font-bold text-black mb-4">
                    uma experiência personalizada, comunicação eficaz e construção de relacionamentos sólidos com os
                    clientes.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 12V22H4V12"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22 7H2V12H22V7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 22V7" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-lg font-bold text-purple-700 mt-4 mb-2">
                    Isso tudo é personalizado de acordo com a preferência de cada cliente.
                  </p>

                  <p className="text-black mb-2">Entretanto todos atendimentos possuem o mesmo objetivo:</p>

                  <p className="text-xl font-bold text-purple-800">
                    entregar excelência e fazer que seus clientes possuam uma experiência única desde o primeiro contato.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Atendimento */}
          <section id="atendimento" className="w-full py-16 bg-gradient-to-b from-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-4 text-purple-800">Como será seu atendimento?</h2>
              <p className="text-center mb-12 text-black">
                Entenda o diferencial da <span className="italic font-bold text-purple-700">Assistência Virtual</span>.
              </p>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/5">
                    <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Assistência Virtual"
                        width={300}
                        height={400}
                        className="object-cover rounded-lg border border-purple-200"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <span className="font-bold text-purple-700">01</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-800">SCRIPT PERSONALIZADO</h3>
                      </div>
                      <p className="text-black">
                        Vamos <span className="font-bold text-purple-700">ajustar</span> ou{" "}
                        <span className="font-bold text-purple-700">criar</span> um SCRIPT de atendimento personalizado
                        para melhorar sua comunicação com o paciente e taxa de conversão.
                      </p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <span className="font-bold text-purple-700">02</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-800">ESTRATÉGIAS</h3>
                      </div>
                      <p className="text-black">
                        Aplicação de Técnicas de Escassez, Gatilhos mentais, Proximidade com o paciente, Provas sociais e
                        Atendimento Humanizado.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <span className="font-bold text-purple-700">03</span>
                        </div>
                        <h3 className="text-xl font-bold text-purple-800">FOLLOW-UP e AGILIDADE</h3>
                      </div>
                      <p className="text-black">
                        Acompanhamento da lead com <span className="font-bold text-purple-700">Follow-up</span>, Respostas
                        rápidas e Utilização de áudios para atrair a atenção do cliente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section id="depoimentos" className="w-full py-16 bg-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="flex justify-center mb-2">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="mx-2 px-3 py-1 border border-purple-200 rounded-full text-xs bg-white">FEEDBACK</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
                O que nossos clientes dizem sobre nós?
              </h2>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-300">
                        <Image
                            src="/placeholder.svg?height=96&width=96"
                            alt="Dra Karina Moura"
                            width={96}
                            height={96}
                            className="object-cover"
                        />
                      </div>
                      <div className="absolute -right-4 -bottom-4 bg-black text-white p-2 rounded-lg text-xs">
                        <p className="font-bold">Dra Karina Moura</p>
                        <p>Fisioterapeuta</p>
                        <p>@drakarina.fisio</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card className="border-2 border-black rounded-xl bg-white">
                      <CardContent className="p-6 text-center">
                        <p className="text-black">
                          "Contratar essa equipe foi meu{" "}
                          <span className="font-bold text-purple-700">melhor investimento</span>, atendimento é{" "}
                          <span className="font-bold text-purple-700">prático, objetivo, rápido</span>, equipe muito boa e
                          resolve meus recibos e praticamente toda a minha vida profissional.{" "}
                          <span className="font-bold text-purple-700">Indico muito!</span>"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-300">
                        <Image
                            src="/placeholder.svg?height=96&width=96"
                            alt="Dr Rafael Mérola"
                            width={96}
                            height={96}
                            className="object-cover"
                        />
                      </div>
                      <div className="absolute -right-4 -bottom-4 bg-black text-white p-2 rounded-lg text-xs">
                        <p className="font-bold">Dr Rafael Mérola</p>
                        <p>Cirurgião Bucomaxilofacial</p>
                        <p>@dr.rafaelmerola</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card className="border-2 border-black rounded-xl bg-white">
                      <CardContent className="p-6 text-center">
                        <p className="text-black">
                          "Desde quando comecei a trabalhar com equipe da Ana,{" "}
                          <span className="font-bold text-purple-700">
                          minha vida profissional se tornou muito mais organizada!
                        </span>{" "}
                          Agora consigo realmente{" "}
                          <span className="font-bold text-purple-700">focar nas consultas e cirurgias</span> com
                          exclusividade! Fora que a <span className="font-bold text-purple-700">taxa de conversão</span>{" "}
                          aumentou consideravelmente! Super indico!"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Proposta */}
          <section id="proposta" className="w-full py-16 bg-gradient-to-b from-purple-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-4xl font-bold text-center mb-4 text-purple-800">Proposta Assistência Virtual</h2>
              <p className="text-center mb-12 text-black">Dr Leonardo Vaz</p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                  <tr>
                    <th className="p-4 bg-black text-white text-left">PACOTE</th>
                    <th className="p-4 bg-black text-white text-left">DESCRIÇÃO</th>
                    <th className="p-4 bg-black text-white text-left">VALOR</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-green-500 text-white">
                    <td className="p-4 border">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                          <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M12 15L8.5 8L15.5 8L12 15Z"
                                fill="silver"
                                stroke="silver"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 21L4 21"
                                stroke="silver"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="font-bold">BÁSICO</span>
                      </div>
                    </td>
                    <td className="p-4 border">
                      <ul className="list-disc pl-5">
                        <li>6h/dia - Seg à Sex;</li>
                        <li>Atendimento de WhatsApp;</li>
                        <li>Organização de agenda;</li>
                        <li>FollowUp.</li>
                      </ul>
                    </td>
                    <td className="p-4 border">
                      <div className="text-center">
                        <p className="line-through">R$1.150</p>
                        <p className="text-2xl font-bold">R$1.000</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-800 text-white">
                    <td className="p-4 border">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                          <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M12 15L8.5 8L15.5 8L12 15Z"
                                fill="gold"
                                stroke="gold"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 21L4 21"
                                stroke="gold"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="font-bold">GOLDEN</span>
                      </div>
                    </td>
                    <td className="p-4 border">
                      <ul className="list-disc pl-5">
                        <li>8h/dia - Seg à Sex;</li>
                        <li>Atendimento de WhatsApp;</li>
                        <li>Organização de agenda;</li>
                        <li>Follow-up;</li>
                        <li>Pós atendimento;</li>
                        <li>Relatório de agendamentos.</li>
                      </ul>
                    </td>
                    <td className="p-4 border">
                      <div className="text-center">
                        <p className="line-through">R$1.250</p>
                        <p className="text-2xl font-bold">R$1.150/MÊS</p>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center mt-4 text-sm text-black">
                Essa proposta possui uma validade de 30 dias contando da data em que foi enviada.
              </p>

              <div className="flex justify-center mt-4">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                  <CheckCircle className="mr-2" />
                  <span className="font-bold">BEST SERVICE</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="w-full py-16 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
              <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua rotina profissional?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Entre em contato agora mesmo e descubra como nossa assistência virtual pode otimizar seu tempo e aumentar
                seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-800 hover:bg-purple-100 font-bold text-lg px-8 py-6">
                  Agendar uma conversa
                </Button>
                <Button
                    variant="outline"
                    className="border-white text-white hover:bg-purple-700 font-bold text-lg px-8 py-6"
                >
                  Conhecer mais serviços
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full bg-black text-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2 text-purple-300">Ana Julia</h3>
                <p className="text-sm">Assistência Virtual para Profissionais da Saúde</p>
              </div>

              <div className="flex flex-col items-center mb-4 md:mb-0">
                <div className="flex space-x-4 mb-2">
                  <a href="#" className="hover:text-purple-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-purple-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-purple-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
                <p className="text-sm">© 2024 Ana Julia Assistência Virtual. Todos os direitos reservados.</p>
              </div>

              <div className="flex items-center">
                <Phone className="mr-2 text-purple-300" />
                <div>
                  <p className="text-sm">(00) 00000-0000</p>
                  <p className="text-sm">contato@anajulia.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
