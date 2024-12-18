import { useState } from "react";
import {
    Flex,
    Input,
    FormControl,
    FormHelperText,
    FormLabel,
    Button,
    Textarea,
    useColorModeValue,
    Box,
    useMediaQuery,
    Text,
    useToast,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PageStore from "@src/store/PageStore";

export default function Contact() {
    const language = PageStore((state) => state.language);
    const bgForm = useColorModeValue("#ffffffb5", "#3d437669");
    const [desktopView] = useMediaQuery("(min-width: 1000px)");
    const borderColor = useColorModeValue(
        "1px solid #80808042",
        "1px solid transparent"
    );

    const principalColor = useColorModeValue("#536DFE", "white");
    const toast = useToast();
    let sentTo = "";

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        captcha: false,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    
    function postData(formData) {
        const buttonSubmit = document.querySelector("#formButton");
        buttonSubmit.disabled = "true";
        sentTo = language ? "Send to" : " Enviado a : ";
        sentTo += form.name;
        return new Promise((resolve, reject) => {
        fetch("https://formspree.io/f/xyzyqvqz", {
                    method: "POST",
                    body: formData,
                    headers: {
                    Accept: "application/json",
                },
            }).then(() => {
                setTimeout(() => {
                    resolve();
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                        captcha: false,
                    });
                    const buttonSubmit = document.querySelector("#formButton");
                    buttonSubmit.disabled = "";
                }, 500);
                }).catch((error) => {
                    setForm({
                        render: true,
                        status: false,
                    }
                );
                    reject("Error al procesar la solicitud: " + error);
                });
            }
        );
    }

    const sendData = (e) => {
        e.preventDefault();
    
        const data = new FormData(e.target);
        toast.promise(postData(data), {
            success: {
                title: language ? "Message sent" : "Mensaje Enviado",
                description: sentTo,
            },
            error: {
            title: language ? "Sending failed" : "Error en el envío",
            description: language
                ? "please try again"
                : "por favor intenta de nuevo",
            },
            loading: {
            title: language ? "Sending message" : "Enviando mensaje",
            description: language ? "Please wait" : "Espere un momento",
            },
        });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={language ? language + language : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Flex
                    flexDirection="column" 
                    justify="center" 
                    id="contact"
                >
                    <Text
                        color={principalColor}
                        lineHeight=" 1.5"
                        fontSize={desktopView ? 50 : "2.5rem"}
                        fontWeight=" 900"
                        letterSpacing=" .2rem"
                        textAlign="center"
                        pb={16}
                    >
                        {language ? "Contact me" : "Contactame"}
                    </Text>
                    <Box
                        bg={bgForm}
                        px="40px"
                        py="60px"
                        border={borderColor}
                        borderRadius={10}
                    >
                        <form
                            onSubmit={(e) => {
                                sendData(e);
                            }}
                        >
                            <Flex
                                columnGap={20}
                                rowGap={50}
                                flexDirection={desktopView ? "row" : "column"}
                            >
                                <Box
                                    w="100%"
                                >
                                    <FormControl
                                        my="20px"
                                    >
                                        <FormLabel>
                                            {language ? "Name" : "Nombre"}
                                        </FormLabel>
                                        <Input
                                            variant="flushed"
                                            _hover={{}}
                                            _active={{}}
                                            _autofill={{}}
                                            required
                                            autoComplete="off"
                                            value={form.name}
                                            onChange={handleChange}
                                            name="name"
                                            type="text"
                                        />
                                    </FormControl>
                                    <FormControl my="20px">
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            variant="flushed"
                                            _hover={{}}
                                            _active={{}}
                                            _autofill={{}}
                                            required
                                            autoComplete="off"
                                            value={form.email}
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                        />
                                        <FormHelperText>
                                            {language
                                                ? "I will not share your email with any page or service."
                                                : "No compartire tu correo con ninguna página o servicio."}
                                        </FormHelperText>
                                    </FormControl>
                                </Box>
                                <FormControl pt="10px">
                                    <FormLabel>{language ? "Subject" : "Asunto"}</FormLabel>
                                    <Textarea
                                        variant="flushed"
                                        required
                                        autoComplete="off"
                                        onChange={handleChange}
                                        name="message"
                                        value={form.message}
                                        height={desktopView && 142}
                                    ></Textarea>
                                    <FormHelperText>
                                        {language ? "Mail subject." : "Asunto del correo."}
                                    </FormHelperText>
                                </FormControl>
                            </Flex>
                            <Button
                                type="submit"
                                mt="20px"
                                w="full"
                                bg="#536dfe"
                                color="white"
                                opacity={0.8}
                                _hover={{ opacity: 1 }}
                                id="formButton"
                            >
                                {language ? "Send" : "Enviar"}
                            </Button>
                        </form>
                    </Box>
                </Flex>
            </motion.div>
        </AnimatePresence>
    )
}